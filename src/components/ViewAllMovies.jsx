import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import StarRateIcon from '@material-ui/icons/StarRate';
import React from 'react';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        padding: "20px",
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
