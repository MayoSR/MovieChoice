import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Chip from '@material-ui/core/Chip';
import TimerIcon from '@material-ui/icons/Timer';
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import CloseIcon from '@material-ui/icons/Close';
import VisibilityIcon from '@material-ui/icons/Visibility';

const useStyles = makeStyles({
    root: {
        background: "#FFF",
        minHeight: "100vh",
        padding: "20px",
        color: "black",
    },
    backButton: {
        padding: 0,
        paddingBottom: "20px"
    },
    viewAll: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        columnGap: "10px",
        rowGap: "20px",
    },
    posterDetails: {
        '& img': {
            width: "100%",
            height: "164px",
            borderRadius: "20px"
        },
        position: "relative",

    },
    movieRating: {
        bottom: "35px",
        background: "#fc2046",
        color: "black",
        '& > p': {
            color: "black",
            textAlign: "center",
            marginBottom: 0,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& svg': {
            color: "#ffbf00",
            height:"20px",
            width:"20px"
        },
        borderTopRightRadius:"5px",
        borderTopLeftRadius:"5px",
    },
    ratingContainer:{
        position:"absolute",
        bottom:"28px",
        left:0,
        right:0,
        marginLeft:"auto",
        marginRight:"auto",
        display:"flex",
        justifyContent:"center",
    }


});

export default function Favorites(props) {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation();
    const goBack = () => {
        history.go(-1)
    }

    const getMovieDetails = () => {
        history.push("/detail")
    }

    return (
        <div className={classes.root}>
            <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                <ArrowBackIcon fontSize={"large"} />
            </IconButton>
            <div className={classes.viewAll}>

                {
                    ["civil_war", "detective_pikachu", "infinity_war", "jurassic_world", "lightning_thief", "spiderman", "social_network", "interstellar"].map((movieName) => {

                        return <div className={classes.posterDetails} onClick={getMovieDetails}>
                            <img src={"/images/" + movieName + ".jpg"} alt={movieName} />
                            <div className={classes.ratingContainer}>
                                <div className={classes.movieRating}>
                                    <StarRateIcon />
                                    <Typography variant="caption" display="block" style={{ paddingTop: "1px", paddingRight: "8px" }}>
                                        9.4
                                    </Typography>
                                </div>
                            </div>
                            <Typography variant="caption" display="block" gutterBottom align={"center"}>
                                {movieName.split("_").join(" ").replace(/(^|\s)[A-Za-zÀ-ÖØ-öø-ÿ]/g, c => c.toUpperCase())}
                            </Typography>
                        </div>
                        // return <div className={classes.posterDetails}><img src={"/images/" + movieName + ".jpg"} alt={movieName} /></div>
                    })
                }
                <br></br>
                <br></br>
            </div>
        </div>

    )
}
