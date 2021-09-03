import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import AddIcon from '@material-ui/icons/Add';
import { Box, IconButton } from '@material-ui/core';
import CreateGroup from './CreateGroup';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import YouTube from 'react-youtube';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import TimerIcon from '@material-ui/icons/Timer';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TvIcon from '@material-ui/icons/Tv';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: 'fixed',
        zIndex: "120",
        bottom: 0,
        boxShadow: '-1px -10px 21px -16px rgba(0,0,0,0.75)',
    },
    categories: {
        width: "100%",
    },
    categoriesList: {
        padding: "0px 20px",
        overflowX: "scroll",
        '&::-webkit-scrollbar': {
            width: "0px"
        },
        whiteSpace: "nowrap",
        '& > div': {
            marginRight: "10px",
        },
        '& img': {
            height: "230px",
            width: "155px",
            marginRight: "20px",
            borderRadius: "20px"
        },
    },
    posterDetails: {
        position: "relative",
        display: "inline-block",
        '& img': {
            boxShadow: "-4px 10px 22px -8px rgba(0,0,0,0.75);",
        },
        marginRight: "20px"
    },
    movieRating: {
        bottom: "35px",
        background: "#595260",
        '& > p': {
            textAlign: "center",
            marginBottom: 0,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& svg': {
            color: "#ffbf00",
            height: "20px",
            width: "20px"
        },
        borderTopRightRadius: "5px",
        borderTopLeftRadius: "5px",
    },
    ratingContainer: {
        position: "absolute",
        bottom: "36px",
        left: "-20px",
        right: 0,
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        justifyContent: "center",
    },
    movieUserTabs: {
        position: "absolute",
        top: "10px",
        right: "30px",
        zIndex: "20",
        display: "flex",
        flexDirection: "column",
    },
    posterButtons: {
        padding: "5px",
        borderRadius: "5px",
        background: "rgba(0,0,0,0.8)",
        marginBottom: "10px"
    }
});

export default function PosterSlider(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('movies');
    const [openGroup, setOpenGroup] = React.useState(false)
    const moviesList = useSelector(state => state.movies)
    let history = useHistory();

    const getMovieDetails = (movie) => {
        history.push({ pathname: "/detail", state: { "movie": movie } })
    }


    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push("/" + newValue);
    };

    const showAllMovies = () => {
        history.push("/all")
    }

    return (
        <div className={classes.categories}>
            <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                style={{ paddingLeft: "20px" }}
            >

                <Typography variant="h5" gutterBottom>
                    {props.header}
                </Typography>
                <Typography variant="caption" gutterBottom onClick={showAllMovies} style={{ color: "#595260",marginRight:"20px" }}>
                    See all
                </Typography>
            </Grid>
            <div className={classes.categoriesList}>
                {
                    moviesList.map((movie) => {

                        return <div className={classes.posterDetails} onClick={() => getMovieDetails(movie)}>
                            <div>
                                <img src={"/images/posters/" + movie.poster + ".jpg"} alt={movie.poster} />
                            </div>
                            <div className={classes.ratingContainer}>
                                <div className={classes.movieRating}>
                                    <StarRateIcon />
                                    <Typography variant="caption" display="block" style={{ paddingTop: "1px", paddingRight: "8px" }}>
                                        {movie.rating}
                                    </Typography>
                                </div>
                            </div>
                            <div style={{ "height": "30px", width: "155px" }}>
                                <Typography variant="body2" display="block" gutterBottom align={"center"} style={{ paddingTop: "10px" }}>
                                    {movie.name}
                                </Typography>
                            </div>
                            <div className={classes.movieUserTabs}>
                                <IconButton className={classes.posterButtons}>

                                    <FavoriteBorderIcon />
                                </IconButton>
                                <IconButton className={classes.posterButtons}>

                                    <PlaylistAddIcon />
                                </IconButton>

                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
}
