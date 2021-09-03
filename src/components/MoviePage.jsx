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
import { useSelector } from 'react-redux';
import PosterSlider from './PosterSlider';

const useStyles = makeStyles({
    root: {

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
    selectedCategory: {
        borderRadius: "5px",
        background: "#595260",
        '& span':{
            color:"#FFD523",
        }
    },
    defaultCategory: {
        borderRadius: "5px",
    },
    widePosterDetails: {
        position: "relative",
        display: "inline-block",
        width: "calc(100vw - 40px)",
        '& img': {
            boxShadow: "-4px 10px 22px -8px rgba(0,0,0,0.75);",
        },
        marginRight: "30px"
    },
    wideCategoriesList: {
        padding: "0px 20px",
        overflowX: "scroll",
        '&::-webkit-scrollbar': {
            width: "0px"
        },
        whiteSpace: "nowrap",
        '& img': {
            borderRadius: "20px",
            marginBottom: "20px",
            boxShadow: "-4px 10px 22px -8px rgba(0,0,0,0.75);",
        },
    },
    posterText: {
        position: "absolute",
        background: "linear-gradient(0deg, rgba(0,0,0,0.2) 20%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.6) 80%, rgba(0,0,0,0) 100%)",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'flex-start',
        left: 0,
        bottom: "26px",
        borderBottomLeftRadius: "18px",
        borderBottomRightRadius: "18px",
        right: 0,
        paddingLeft: "20px",
        paddingTop: "10px",
        whiteSpace: "normal",
        wordWrap: "break-all",
        flexDirection: "column",
        '& h4': {
            color: "#B2B1B9",
        },
        height:"50%"
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
export default function MoviePage() {
    const classes = useStyles();
    const history = useHistory();
    const moviesList = useSelector(state => state.movies)
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

    const getMovieDetails = (movie) => {
        history.push({ pathname: "/detail", state: { "movie": movie } })
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
                <Grid style={{ color: "#F4F6FF", width: "100vw", marginTop: "20px" }}>
                    <Typography variant="h5" display="block" align={"left"} style={{ paddingBottom: "10px", paddingLeft: "20px" }}>
                        Most Popular
                    </Typography>

                    <div className={classes.wideCategoriesList}>
                        {
                            moviesList.map((movie) => {

                                return <div className={classes.widePosterDetails} onClick={() => getMovieDetails(movie)}>
                                    <img src={"/images/wide/" + movie.poster + ".jpg"} alt={movie.name} />
                                    <div className={classes.posterText}>
                                        <Grid direction="row" alignItems="center" justifyContent="space-between" className={classes.starStyle}>
                                            <Box>
                                                {
                                                    new Array(Math.floor(movie.rating / 2)).fill(1, 0, Math.floor(movie.rating / 2)).map(() => { return <StarIcon /> })
                                                }
                                                {
                                                    new Array(5 - Math.floor(movie.rating / 2)).fill(1, 0, (5 - Math.floor(movie.rating / 2))).map(() => { return <StarOutlineIcon /> })
                                                }

                                            </Box>
                                            <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                                            <Typography variant="subtitle2" display="block">
                                                {movie.releaseYear}
                                            </Typography>
                                        </Grid>
                                        <Typography variant="h4" display="block" align={"left"} style={{ paddingBottom: "10px" }}>
                                            {movie.name}
                                        </Typography>

                                    </div>
                                    <div className={classes.movieUserTabs} style={{ right: "10px" }}>
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
                </Grid>
                <div className={classes.categoriesList} style={{ marginBottom: "20px" }}>
                    {
                        ["All", "Romance", "Comedy", "Thriller", "Action", "Adventure", "Science Fiction", "Drama"].map((category) => {

                            return <Chip variant="outlined" className={selectedCategory[category] ? classes.selectedCategory : classes.defaultCategory} label={category} onClick={(e) => chooseCategory(category)} />
                        })
                    }
                </div>
                <PosterSlider header="Trending" />
                <PosterSlider header="Recently Viewed" />
            </Grid>
            <br></br>
            <br></br>
        </div>
    )
}
