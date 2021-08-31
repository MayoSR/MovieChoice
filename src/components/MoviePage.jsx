import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { Box } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TvIcon from '@material-ui/icons/Tv';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

const useStyles = makeStyles({
    root: {
        padding: "20px",
        background: "#1B1B1B",
        '& p,span,h1,h2,h3,h4,h5,h6': {
            color: "white"
        }
    },
    categories: {
        width: "100%",
    },
    categoriesList: {
        marginBottom: "20px",
        overflowX: "scroll",
        whiteSpace: "nowrap",
        paddingBottom: "20px",
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
    selectedCategory: {
        borderRadius: "5px",
        background: "rgba(252, 32, 70,1)",
        color: "white"
    },
    defaultCategory: {
        borderRadius: "5px",
        background: "rgba(0,0,0,0.3)"
    },
    posterDetails: {
        position: "relative",
        display: "inline-block",
    },
    movieRating: {
        bottom: "35px",
        background: "#fc2046",
        color: "white",
        '& > p': {
            color: "white",
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
    wideCategoriesList: {
        marginBottom: "20px",
        overflowX: "scroll",
        whiteSpace: "nowrap",
        '& > div:not(:first-child) ': {
            marginLeft: "20px"
        },
        '& .posterDetails': {
            width: "100vw",
            height: "315px",
            borderRadius: "20px",
            marginBottom: "20px",
        },
        '& img': {
            width: "100vw",
            height: "315px",
            borderRadius: "20px",
            marginBottom: "20px"
        },
    },
    posterText: {
        position: "absolute",
        background: "radial-gradient(circle, rgba(0,0,0,0), rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'flex-start',
        left: 0,
        top: 0,
        bottom: 0,
        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",
        right: 0,
        paddingLeft: "20px",
        paddingTop: "10px",
        height: "315px",
        borderRadius: "20px",
        whiteSpace: "normal",
        wordWrap: "break-all",
        flexDirection: "column"
    },
    starStyle: {
        color: "#ffbf00",
        display: "flex",
        fontSize: "10px",
        marginBottom: "10px"
    },
    dotSeperator: {
        fontSize: "8px",
        marginLeft: "5px",
        marginRight: "5px",
        color: "white"
    },
    movieUserTabs: {
        position: "absolute",
        top: "10px",
        right: "30px",
        zIndex: "20",
        display: "flex",
        flexDirection: "column",
        '& svg': {
            color: "#fc2046",
        }
    },
    posterButtons:{
        padding:"5px",
        borderRadius:"5px",
        background:"rgba(0,0,0,0.8)",
        marginBottom:"10px"
    }


});
export default function MoviePage() {
    const classes = useStyles();
    const history = useHistory();
    const [selectedCategory, setSelectedCategory] = React.useState({
        "All": 1, "Romance": 0, "Comedy": 0, "Thriller": 0, "Action": 0, "Adventure": 0, "Science Fiction": 0, "Drama": 0
    })

    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    const chooseCategory = (category) => {

        setSelectedCategory({ ...selectedCategory, [category]: 1 })
    }

    const getMovieDetails = () => {
        history.push("/detail")
    }

    const showAllMovies = () => {
        history.push("/all")
    }

    return (
        <div className={classes.root}>
            <Grid
                container
                direction="row"
                alignItems="center"
            >
                {/* <div className={classes.categories}>
                    <div style={{ paddingTop: "10px", paddingBottom: "20px" }}>

                        <Divider />
                    </div>
                    <Typography variant="h5" gutterBottom>
                        Categories
                    </Typography>
                    <div className={classes.categoriesList}>
                        {
                            ["Romance", "Comedy", "Thriller", "Action", "Adventure", "Science Fiction", "Drama"].map((category) => {

                                return <Chip variant="outlined" label={category} />
                            })
                        }
                    </div>
                    <div>

                        <Divider />
                    </div>
                </div> */}
                <Grid style={{ color: "white", width: "100vw", marginTop: "20px" }}>
                    <Typography variant="h5" display="block" align={"left"} style={{ paddingBottom: "10px" }}>
                        Coming Soon
                    </Typography>

                    <div className={classes.wideCategoriesList}>
                        {
                            ["interstellar", "starwars", "spiderman", "starwars", "batman", "batman2"].map((movieName) => {

                                return <div className={classes.posterDetails} onClick={getMovieDetails}>
                                    <img src={"/images/wide/" + movieName + ".jpg"} alt={movieName} />
                                    <div className={classes.posterText}>
                                        <Typography variant="h4" display="block" align={"left"} style={{ paddingBottom: "10px" }}>
                                            Interstellar
                                        </Typography>
                                        <Grid direction="row" alignItems="center" justifyContent="space-between" className={classes.starStyle}>
                                            <Box>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarOutlineIcon />
                                            </Box>
                                            <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                                            <Typography variant="subtitle2" display="block" className={classes.addToPlaylistText}>
                                                2017
                                            </Typography>
                                        </Grid>

                                    </div>
                                </div>
                            })
                        }
                    </div>
                </Grid>
                <div className={classes.categoriesList} >
                    {
                        ["All", "Romance", "Comedy", "Thriller", "Action", "Adventure", "Science Fiction", "Drama"].map((category) => {

                            return <Chip variant="outlined" className={selectedCategory[category] ? classes.selectedCategory : classes.defaultCategory} label={category} onClick={(e) => chooseCategory(category)} />
                        })
                    }
                </div>
                {/* <Grid style={{ color: "white", width: "100vw" }}>
                    <Typography variant="h5" display="block" align={"left"} style={{ paddingBottom: "10px" }}>
                        Latest Trailer
                    </Typography>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <YouTube videoId="Nt9L1jCKGnE" opts={opts} />
                    </div>
                </Grid> */}
                <div className={classes.categories}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Typography variant="h5" gutterBottom>
                            Your Recent
                        </Typography>
                        <Typography variant="caption" gutterBottom onClick={showAllMovies} style={{ color: "#fc2046" }}>
                            See all
                        </Typography>
                    </Grid>
                    <div className={classes.categoriesList}>
                        {
                            ["civil_war", "detective_pikachu", "infinity_war", "jurassic_world", "lightning_thief", "spiderman", "social_network", "interstellar"].map((movieName) => {

                                return <div className={classes.posterDetails} onClick={getMovieDetails}>
                                    <div>
                                        <img src={"/images/" + movieName + ".jpg"} alt={movieName} />
                                    </div>
                                    <div className={classes.ratingContainer}>
                                        <div className={classes.movieRating}>
                                            <StarRateIcon />
                                            <Typography variant="caption" display="block" style={{ paddingTop: "1px", paddingRight: "8px" }}>
                                                9.4
                                            </Typography>
                                        </div>
                                    </div>
                                    <div style={{ "height": "30px", width: "155px" }}>
                                        <Typography variant="body2" display="block" gutterBottom align={"center"}>
                                            {movieName.split("_").join(" ").replace(/(^|\s)[A-Za-zÀ-ÖØ-öø-ÿ]/g, c => c.toUpperCase())}
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
                <div className={classes.categories}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Typography variant="h5" gutterBottom>
                            Trending
                        </Typography>
                        <Typography variant="caption" gutterBottom onClick={showAllMovies} style={{ color: "#fc2046" }}>
                            See all
                        </Typography>
                    </Grid>
                    <div className={classes.categoriesList}>
                        {
                            ["lightning_thief", "spiderman", "social_network", "interstellar", "civil_war", "detective_pikachu", "infinity_war", "jurassic_world",].map((movieName) => {

                                return <div className={classes.posterDetails} onClick={getMovieDetails}>
                                    <div>
                                        <img src={"/images/" + movieName + ".jpg"} alt={movieName} />
                                    </div>
                                    <div className={classes.ratingContainer}>
                                        <div className={classes.movieRating}>
                                            <StarRateIcon />
                                            <Typography variant="caption" display="block" style={{ paddingTop: "1px", paddingRight: "8px" }}>
                                                9.4
                                            </Typography>
                                        </div>
                                    </div>
                                    <div style={{ "height": "30px", width: "155px" }}>
                                        <Typography variant="body2" display="block" gutterBottom align={"center"}>
                                            {movieName.split("_").join(" ").replace(/(^|\s)[A-Za-zÀ-ÖØ-öø-ÿ]/g, c => c.toUpperCase())}
                                        </Typography>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </div>
            </Grid>
            <br></br>
        </div>
    )
}
