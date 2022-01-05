import { IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import StarRateIcon from '@material-ui/icons/StarRate';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

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
        paddingBottom: "20px",
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
    const moviesList = useSelector(state => state.movies)
    let history = useHistory();

    const getMovieDetails = (movie) => {
        history.push({ pathname: "/detail", state: { "movie": movie } })
    }



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

            >

                <Typography variant="h5" gutterBottom>
                    {props.header}
                </Typography>
                <Typography variant="caption" gutterBottom onClick={showAllMovies} style={{ color: "#595260", marginRight: "20px" }}>
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
