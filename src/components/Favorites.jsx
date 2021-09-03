import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ShareIcon from '@material-ui/icons/Share';
import StarRateIcon from '@material-ui/icons/StarRate';
import VisibilityIcon from '@material-ui/icons/Visibility';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import WatchedDetail from './WatchedDetail';

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        padding: "20px",
    },
    posterCardDetails: {
        background:"#1e202e",
        '& img': {
            width: "100px",
        },
        overflow: "hidden",
        borderRadius: "20px",
        marginBottom: "20px",
        boxShadow: "10px 10px 15px -14px rgba(0,0,0,0.75);",
        height:"160px"
    },
    dotSeperator: {
        fontSize: "8px",
        marginLeft: "5px",
        marginRight: "5px",
        color: "#828282"
    },
    ratingStar: {
        color: "#ffbf00",
        marginLeft: "-5px"
    },
    backButton: {
        padding: 0
    },
    watchBtnStyle:{ 
        fontSize: "0.55rem",
        '& span':{
            color:"#FFD523",
        },
        borderColor:"#FFD523",
        marginLeft:"10px"
    }
});


export default function Favorites(props) {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation();
    const [open, setOpenState] = React.useState(false);
    const [groupName, setGroupName] = React.useState("");
    const moviesList = useSelector(state => state.movies)

    const goBack = () => {
        history.go(-1)
    }

    const eventHandle = (e,status,groupName) =>{
        e.stopPropagation()
        dialogStatus(status,groupName)
    }

    const dialogStatus = (status, groupName) => {
        
        setOpenState(status)
        setGroupName(groupName)
    }

    const getMovieDetails = (movie) => {
        history.push({pathname:"/detail",state:{"movie":movie}})
    }

    return (
        <div className={classes.root}>
            <Box display="flex" justifyContent="space-between" alignItems="flex-start" style={{ marginBottom: "20px" }}>
                <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                    <ArrowBackIcon fontSize={"large"} />
                </IconButton>
                <Box>
                    <Typography variant="h6" display="block" align={"left"}>
                        {location.state.groupName}
                    </Typography>
                </Box>
                <Box>
                    <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                        <ShareIcon fontSize={"medium"} />
                    </IconButton>
                </Box>
            </Box>
            {
                moviesList.map((movie) => {

                    return <Box display="flex" direction="row" className={classes.posterCardDetails} onClick={() => getMovieDetails(movie)} justifyContent="space-between">
                        <img src={"/images/posters/" + movie.poster + ".jpg"} alt={movie.poster} />
                        <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                            <Box display="flex" justifyContent="space-between">
                                <Box display="flex" flexDirection="column">
                                    <Typography variant="subtitle1" display="block" align={"left"}>
                                        {movie.name}
                                    </Typography>
                                    <Box display="flex" alignItems="center" justifyContent="flex-start" style={{color:"#828282"}}>
                                        <StarRateIcon fontSize={"medium"} className={classes.ratingStar} />
                                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                                            {movie.rating}
                                        </Typography>
                                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                                            {movie.releaseYear}
                                        </Typography>
                                    </Box>

                                </Box>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">

                                    <Button variant="outlined" size={"small"} className={classes.watchBtnStyle}>
                                        Watched
                                    </Button>

                                    {location.state.groupName !== "My Favorites" ? <Box display="flex" alignItems="center" style={{color:"#828282"}}>
                                        <IconButton style={{padding:0,color:"#828282"}} onClick={(e) => eventHandle(e,true,movie.poster)}>

                                            <VisibilityIcon fontSize={"small"} />
                                        </IconButton>
                                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                                        <Typography variant="caption" display="block" className={classes.addToPlaylistText} style={{ lineHeight: "0px" }}>
                                            3
                                        </Typography>
                                    </Box> : <></>

                                    }
                                </Box>
                            </Box>

                            <Divider style={{ marginBottom: "10px", marginTop: "5px" }} />
                            <Typography variant="caption" display="block" align={"left"} style={{height:"80px",overflow:"hidden"}}>
                                {movie.about}
                            </Typography>
                            {/* <Divider style={{ marginBottom: "10px", marginTop: "5px" }} />
                            <Box display="flex">
                                <Typography variant="caption" display="block" align={"left"}>
                                    Liked by Anne, Jane and 5 others
                                </Typography>
                            </Box> */}
                        </Box>
                    </Box>
                })
            }
            <br></br>
            <br></br>
            <WatchedDetail open={open} dialogStatusProp={dialogStatus} groupName={groupName} />
        </div>
    )
}
