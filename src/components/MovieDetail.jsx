import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { Box } from '@material-ui/core';
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
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory, useLocation } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TvIcon from '@material-ui/icons/Tv';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
    root: {
    },
    backButton: {
        position: "absolute",
        top: "20px",
        left: "20px",
        zIndex: "20"
    },
    imageBackdrop: {
        position: "fixed",
        '& > img': {
            width: "100vw",
            height: "600px",
        }
    },
    foredrop: {
        position: "absolute",
        borderTopLeftRadius: "30px",
        borderTopRightRadius: "30px",
        top: "450px",
        left: 0,
        right: 0,
        background:"#2C2E43",
        zIndex: 100,
        
    },
    innerForedrop: {
        position: "absolute",
        background:"#2C2E43",
        zIndex: "100",
        bottom: 0,
        left: 0,
        right: 0,

    },
    imageForedrop: {
        zIndex: 40,
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        boxShadow: "-4px 13px 230px 8px rgba(0,0,0,0.75) inset"
    },
    addToPlaylistText: {
        color: "#F4F6FF",
    },
    starStyle: {
        '& svg': {
            color: "#ffbf00"
        },
        display: "flex",
        fontSize: "10px",
        marginBottom: "10px"
    },
    genreStyle: {
        '& .MuiChip-outlined': {
            background: "#595260"
        },
        '& span': {
            color: "#F4F6FF"
        },
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
    },
    dotSeperator: {
        fontSize: "8px",
        marginLeft: "5px",
        marginRight: "5px",
        color: "#F4F6FF"
    },
    ratingStar: {
        color: "#ffbf00"
    },
    runtime: {
        color: "#F4F6FF"
    },
    categoriesList: {
        color: "#F4F6FF",
        overflowX: "scroll",
        whiteSpace: "nowrap",
        paddingBottom: "20px",
        '& > div': {
            marginRight: "10px",
        },
        '& img': {
            height: "80px",
            width: "80px",
            borderRadius: "50%",
        },
        paddingLeft: "20px"
    },
    photosList: {
        color: "#F4F6FF",
        overflowX: "scroll",
        whiteSpace: "nowrap",
        marginBottom: "10px",
        paddingBottom: "10px",
        '& > div': {
            marginRight: "10px",
        },
        '& img': {
            height: "120px",
            width: "200px",
            borderRadius: "20px",
        },
        paddingLeft: "20px",

    },
    posterDetails: {
        display: "inline-block",
        marginRight: "10px",
        align: "center",
        position: "relative"
    },
    castPicture: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    moviesCategoriesList: {
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
    reviewsList: {
        '& .MuiListItem-gutters': {
            padding: 0
        },
        '& span,p': {
            color: "#F4F6FF"
        }
    },
    movieRating: {
        bottom: "35px",
        background: "#595260",
        color: "#F4F6FF",
        '& > p': {
            color: "#F4F6FF",
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
        right: "25px",
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
export default function MovieDetail(props) {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation();
    const movie = location.state.movie
    const moviesList = useSelector(state => state.movies)

    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    const showReviews = () => {
        history.push("/reviews")
    }

    const getMovieDetails = (movie) => {
        history.push({ pathname: "/detail", state: { "movie": movie } })
    }

    const goBack = () => {
        history.go(-1)
    }

    const showAllMovies = () => {
        history.push("/all")
    }

    return (
        <div className={classes.root}>
            <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                <ArrowBackIcon fontSize={"large"} />
            </IconButton>
            <div className={classes.movieUserTabs}>
                <IconButton className={classes.posterButtons}>

                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton className={classes.posterButtons}>

                    <TvIcon />
                </IconButton>
                <IconButton className={classes.posterButtons}>

                    <PlaylistAddIcon />
                </IconButton>


            </div>
            <div className={classes.imageBackdrop}>
                <img src={"/images/posters/" + movie.poster + ".jpg"} alt={movie.poster} />
                <div className={classes.imageForedrop}>

                </div>
            </div>
            <div className={classes.foredrop}>
                <br></br>
                <Grid style={{ padding: "0 20px" }}>
                    <Grid direction="row" alignItems="center" justifyContent="space-between" className={classes.starStyle}>
                        <Box>
                            {
                                new Array(Math.floor(movie.rating / 2)).fill(1, 0, Math.floor(movie.rating / 2)).map(() => { return <StarIcon /> })
                            }
                            {
                                new Array(5 - Math.floor(movie.rating / 2)).fill(1, 0, (5 - Math.floor(movie.rating / 2))).map(() => { return <StarOutlineIcon /> })
                            }
                        </Box>
                    </Grid>
                    <Typography variant="h4" gutterBottom className={classes.addToPlaylistText}>
                        {movie.name}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        alignItems="center">
                        <TimerIcon fontSize={"small"} className={classes.runtime} />
                        <div style={{ padding: "2px" }} />
                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                            {movie.runtime}
                        </Typography>
                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                        <StarRateIcon fontSize={"medium"} className={classes.ratingStar} />
                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                            {movie.rating}
                        </Typography>
                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                            {movie.releaseYear}
                        </Typography>
                    </Grid>
                    <br></br>
                    <Grid direction="row" alignItems="center" justifyContent="center" className={classes.genreStyle}>
                        <Chip variant="outlined" label={"Action"} color="primary" />
                        <Chip variant="outlined" label={"Adventure"} color="primary" />
                        <Chip variant="outlined" label={"Comedy"} color="primary" />
                    </Grid>
                </Grid>


                <Grid style={{ padding: "20px", color: "#F4F6FF" }}>
                    <Typography variant="h5" display="block" align={"left"} style={{ padding: "10px 0" }}>
                        About
                    </Typography>
                    <Typography variant="body2" display="block" align={"left"}>
                        {movie.about}
                    </Typography>
                </Grid>
                <Typography variant="h5" display="block" align={"left"} style={{ paddingLeft: "20px", paddingBottom: "10px", color: "#F4F6FF" }}>
                    Photos
                </Typography>
                <div className={classes.photosList}>
                    {
                        Array.from(Array(movie.photosCount).keys()).map((photoIndex) => {

                            return <div className={classes.posterDetails}>
                                <img src={"/images/photos/" + movie.poster + "/" + (photoIndex + 1) + ".jpg"} alt={movie.poster + photoIndex} />
                            </div>
                        })
                    }
                </div>
                <Grid style={{ color: "#F4F6FF", width: "100vw" }}>
                    <Typography variant="h5" display="block" align={"left"} style={{ paddingLeft: "20px", paddingBottom: "10px" }}>
                        Watch Trailer
                    </Typography>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <YouTube videoId={movie.youtube} opts={opts} />
                    </div>
                </Grid>
                <br></br>
                <Typography variant="h5" display="block" align={"left"} style={{ paddingLeft: "20px", paddingBottom: "10px", color: "#F4F6FF" }}>
                    Cast
                </Typography>
                <div className={classes.categoriesList} style={{ paddingLeft: "10px" }}>
                    {
                        movie.cast.map((actor) => {

                            return <div className={classes.posterDetails}>
                                <div className={classes.castPicture}>
                                    <img src={"/images/actors/" + actor + ".jpg"} alt={actor} />
                                    <div style={{ "height": "30px", width: "100px", marginTop: "5px" }}>
                                        <Typography variant="body2" display="block" gutterBottom align={"center"} style={{ whiteSpace: "normal" }}>
                                            {actor.split("_").join(" ").replace(/(^|\s)[A-Za-zÀ-ÖØ-öø-ÿ]/g, c => c.toUpperCase())}
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </div>
                <div className={classes.categories} style={{ padding: "20px", color: "#F4F6FF" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Typography variant="h5" gutterBottom>
                            Reviews
                        </Typography>
                        <Typography variant="caption" gutterBottom style={{ color: "#595260" }} onClick={showReviews}>
                            See all
                        </Typography>
                    </Grid>
                    <div className={classes.reviewsList}>
                        <List className={classes.root}>
                            {movie.reviews.map((review) => {
                                return <>
                                    <ListItem button alignItems="flex-start" style={{ marginBottom: "10px" }} onClick={showReviews}>
                                        <ListItemAvatar>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={
                                                <Grid
                                                    container
                                                    direction="row"
                                                    justifyContent="space-between"
                                                    alignItems="center">
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        {review.reviewer}
                                                    </Typography>
                                                    <Box style={{ display: "flex", alignItems: "center" }}>
                                                        <StarRateIcon className={classes.ratingStar} />
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            {review.rating}
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    {review.review}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </>
                            })}
                        </List>
                    </div>
                </div>
                <div className={classes.categories} style={{ padding: "20px", color: "#F4F6FF" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Typography variant="h5" gutterBottom>
                            Recommended
                        </Typography>
                        <Typography variant="caption" gutterBottom style={{ color: "#595260" }} onClick={showAllMovies}>
                            See all
                        </Typography>
                    </Grid>
                    <div className={classes.moviesCategoriesList}>
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
                                        <Typography variant="body2" display="block" gutterBottom align={"center"}>
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

                <br></br>
                <br></br>
            </div>
        </div>
    )
}
