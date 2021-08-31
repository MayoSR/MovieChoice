import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Chip from '@material-ui/core/Chip';
import TimerIcon from '@material-ui/icons/Timer';
import StarIcon from '@material-ui/icons/Star';
import StarRateIcon from '@material-ui/icons/StarRate';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import YouTube from 'react-youtube';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import VisibilityIcon from '@material-ui/icons/Visibility';
import WatchedDetail from './WatchedDetail';

const useStyles = makeStyles({
    root: {
        background: "#1B1B1B",
        minHeight: "100vh",
        padding: "20px",
        color: "white"
    },
    posterCardDetails: {
        background:"#242424",
        '& img': {
            width: "100px",
        },
        overflow: "hidden",
        borderRadius: "20px",
        marginBottom: "20px",
        boxShadow: "10px 10px 15px -14px rgba(0,0,0,0.75);"
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
});

export default function Favorites(props) {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation();
    const [open, setOpenState] = React.useState(false);
    const [groupName, setGroupName] = React.useState("");

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

    const getMovieDetails = () => {
        history.push("/detail")
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
                ["civil_war", "detective_pikachu", "infinity_war", "jurassic_world", "lightning_thief", "spiderman", "social_network", "interstellar"].map((movieName) => {

                    return <Box display="flex" direction="row" className={classes.posterCardDetails} onClick={getMovieDetails} justifyContent="space-between">
                        <img src={"/images/" + movieName + ".jpg"} alt={movieName} />
                        <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                            <Box display="flex" justifyContent="space-between">
                                <Box display="flex" flexDirection="column">
                                    <Typography variant="subtitle1" display="block" align={"left"}>
                                        {movieName.split("_").join(" ").replace(/(^|\s)[A-Za-zÀ-ÖØ-öø-ÿ]/g, c => c.toUpperCase())}
                                    </Typography>
                                    <Box display="flex" alignItems="center" justifyContent="flex-start" style={{color:"#828282"}}>
                                        <StarRateIcon fontSize={"medium"} className={classes.ratingStar} />
                                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                                            4.1
                                        </Typography>
                                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                                            2017
                                        </Typography>
                                    </Box>

                                </Box>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">

                                    <Button variant="outlined" color="primary" size={"small"} style={{ fontSize: "0.55rem" }}>
                                        Watched
                                    </Button>

                                    {location.state.groupName !== "My Favorites" ? <Box display="flex" alignItems="center" style={{color:"#828282"}}>
                                        <IconButton style={{padding:0,color:"#828282"}} onClick={(e) => eventHandle(e,true,movieName)}>

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
                            <Typography variant="caption" display="block" align={"left"}>
                                Discussions for a sequel to Spider-Man: Homecoming began by October 2016, and the project was confirmed later that year.
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
