import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import StarRateIcon from '@material-ui/icons/StarRate';
import React from 'react';
import { useHistory } from 'react-router-dom';
import YouTube from 'react-youtube';

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
    selectedCategory:{
        borderRadius:"5px",
        background: "rgba(252, 32, 70,1)",
        color: "white"

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
        '& img': {
            width: "100vw",
            height: "200px",
            borderRadius: "20px",
            marginBottom: "20px"
        },
    },
    posterText: {
        position: "absolute",
        background: "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 80%, rgba(0,0,0,0) 100%);",
        top: 0,
        left: 0,
        height: "60px",
        borderTopLeftRadius: "18px",
        borderTopRightRadius: "18px",
        right: 0,
        paddingLeft: "20px",
        paddingTop: "10px",

    }


});
export default function MoviePage() {
    const classes = useStyles();
    const history = useHistory();

    const opts = {
        height: '250',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

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
                            ["dominion", "shangchi", "spiderman", "starwars", "venom"].map((movieName) => {

                                return <div className={classes.posterDetails} onClick={getMovieDetails}>
                                    <div>
                                        <img src={"/images/wide/" + movieName + ".jpg"} alt={movieName} />
                                    </div>
                                    <div className={classes.posterText}>
                                        <Typography variant="body1" display="block" align={"left"} style={{ paddingBottom: "10px" }}>
                                            Jurassic World : Dominion
                                        </Typography>
                                    </div>
                                </div>
                            })
                        }
                    </div>
                </Grid>
                <div className={classes.categoriesList} >
                    <Chip variant="outlined" label={"All"} className={classes.selectedCategory} />
                    {
                        ["Romance", "Comedy", "Thriller", "Action", "Adventure", "Science Fiction", "Drama"].map((category) => {

                            return <Chip variant="outlined" style={{borderRadius:"5px",background:"rgba(0,0,0,0.3)"}} label={category} />
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
