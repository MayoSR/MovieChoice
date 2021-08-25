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
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import TvIcon from '@material-ui/icons/Tv';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

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
        background: "#1B1B1B",
        zIndex:100,
    },
    innerForedrop: {
        position: "absolute",
        background: "#1B1B1B",
        zIndex: "100",
        bottom: 0,
        left: 0,
        right: 0,

    },
    imageForedrop:{
        zIndex:40,
        position:"absolute",
        top:0,
        bottom:0,
        left:0,
        right:0,
        boxShadow:"-4px 13px 230px 8px rgba(0,0,0,0.75) inset"
    },
    addToPlaylistText: {
        color: "white",
    },
    starStyle: {
        '& svg': {
            color: "#ffbf00"
        },
        display: "flex",
        fontSize: "10px",
        marginBottom:"10px"
    },
    genreStyle: {
        '& .MuiChip-outlined': {
            background: "rgba(252, 32, 70,1)"
        },
        '& span': {
            color: "white"
        },
        width: "100%",
        display: "flex",
        justifyContent: "space-evenly",
    },
    dotSeperator: {
        fontSize: "8px",
        marginLeft: "5px",
        marginRight: "5px",
        color: "white"
    },
    ratingStar: {
        color: "#ffbf00"
    },
    runtime: {
        color: "white"
    },
    categoriesList: {
        color: "white",
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
        color: "white",
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
            color: "white"
        }
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
    movieUserTabs:{
        position: "absolute",
        top: "40px",
        right: "20px",
        zIndex: "20",
        display:"flex",
        flexDirection:"column",
        '& svg':{
            color:"#fc2046",
            marginBottom:"20px",
        }
    }
});
export default function MovieDetail() {
    const classes = useStyles();
    const history = useHistory()

    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const showReviews = () => {
        history.push("/reviews")
    }

    const getMovieDetails = () => {
        history.push("/detail")
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
                <FavoriteBorderIcon />
                <TvIcon />
                <PlaylistAddIcon />
            </div>
            <div className={classes.imageBackdrop}>
                <img src="/images/spiderman.jpg" alt="poster backdrop" />
                <div className={classes.imageForedrop}>

                </div>
            </div>
            <div className={classes.foredrop}>
                <br></br>
                {/* <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid flexDirection="column" justifyContent="center" alignItems="center">
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <FavoriteBorderIcon fontSize={"large"} />
                        </IconButton>
                        <Typography variant="caption" display="block" gutterBottom className={classes.addToPlaylistText}>
                            Favorite
                        </Typography>
                    </Grid>
                    <div style={{ width: "40px" }} />
                    <Grid flexDirection="column" justifyContent="center" alignItems="center">
                        <IconButton color="primary" aria-label="add to shopping cart">
                            <LibraryAddIcon fontSize={"large"} />
                        </IconButton>
                        <Typography variant="caption" display="block" gutterBottom className={classes.addToPlaylistText}>
                            Share
                        </Typography>
                    </Grid>
                </Grid> */}
                <Grid style={{padding:"0 20px"}}>
                    <Grid direction="row"  alignItems="center" justifyContent="space-between" className={classes.starStyle}>
                        <Box>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarOutlineIcon />
                        </Box>
                    </Grid>
                    <Typography variant="h5" gutterBottom className={classes.addToPlaylistText}>
                        Spider-Man : Homecoming
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        alignItems="center">
                        <TimerIcon fontSize={"small"} className={classes.runtime} />
                        <div style={{ padding: "2px" }} />
                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                            2h 14mins
                        </Typography>
                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                        <StarRateIcon fontSize={"medium"} className={classes.ratingStar} />
                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                            4.1
                        </Typography>
                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                            2017
                        </Typography>
                    </Grid>
                    <br></br>
                    <Grid direction="row" alignItems="center" justifyContent="center" className={classes.genreStyle}>
                        <Chip variant="outlined" label={"Action"} color="primary" />
                        <Chip variant="outlined" label={"Adventure"} color="primary" />
                        <Chip variant="outlined" label={"Comedy"} color="primary" />
                    </Grid>
                </Grid>


                <Grid style={{ padding: "20px", color: "white" }}>
                    <Typography variant="h5" display="block" align={"left"} style={{ padding: "10px 0" }}>
                        About
                    </Typography>
                    <Typography variant="subtitle2" display="block" align={"left"}>
                        Discussions for a sequel to Spider-Man: Homecoming began by October 2016, and the project was confirmed later that year. Holland, Watts, and the writers were all set to return by the end of 2017. In 2018, Jackson and Gyllenhaal joined the cast as Fury and Mysterio, respectively. Holland revealed the sequel's title ahead of filming, which began that July and took place in England, the Czech Republic, Italy, and the New York metropolitan area. Production wrapped in October 2018. The marketing campaign was the most expensive for a film ever and attempted to avoid revealing spoilers for Avengers: Endgame prior to its April 2019 release.
                    </Typography>
                </Grid>
                <Typography variant="h5" display="block" align={"left"} style={{ paddingLeft: "20px", paddingBottom: "10px", color: "white" }}>
                    Photos
                </Typography>
                <div className={classes.photosList}>
                    {
                        ["homecoming_1", "homecoming_2", "homecoming_3", "homecoming_4", "homecoming_5"].map((photo) => {

                            return <div className={classes.posterDetails}>
                                <img src={"/images/photos/" + photo + ".jpg"} alt={photo} />
                            </div>
                        })
                    }
                </div>
                <Grid style={{ color: "white", width: "100vw" }}>
                    <Typography variant="h5" display="block" align={"left"} style={{ paddingLeft: "20px", paddingBottom: "10px" }}>
                        Watch Trailer
                    </Typography>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <YouTube videoId="Nt9L1jCKGnE" opts={opts} />
                    </div>
                </Grid>
                <br></br>
                <Typography variant="h5" display="block" align={"left"} style={{ paddingLeft: "20px", paddingBottom: "10px", color: "white" }}>
                    Cast
                </Typography>
                <div className={classes.categoriesList} style={{ paddingLeft: "10px" }}>
                    {
                        ["tom_holland", "robert_downey_jr", "zendaya", "jake_gyllenhaal"].map((actor) => {

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
                <div className={classes.categories} style={{ padding: "20px", color: "white" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Typography variant="h5" gutterBottom>
                            Reviews
                        </Typography>
                        <Typography variant="caption" gutterBottom style={{ color: "#fc2046" }} onClick={showReviews}>
                            See all
                        </Typography>
                    </Grid>
                    <div className={classes.reviewsList}>
                        <List className={classes.root}>
                            {[1, 2, 3].map((ele) => {
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
                                                        Ali Connors
                                                    </Typography>
                                                    <Box style={{ display: "flex", alignItems: "center" }}>
                                                        <StarRateIcon className={classes.ratingStar} />
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            4.5
                                                        </Typography>
                                                    </Box>
                                                </Grid>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    {" Great movie, must watch for all Spider-Man fans!"}
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
                <div className={classes.categories} style={{ padding: "20px", color: "white" }}>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                    >

                        <Typography variant="h5" gutterBottom>
                            Recommended
                        </Typography>
                        <Typography variant="caption" gutterBottom style={{ color: "#fc2046" }} onClick={showAllMovies}>
                            See all
                        </Typography>
                    </Grid>
                    <div className={classes.moviesCategoriesList}>
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
