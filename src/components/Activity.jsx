import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        padding: "20px",
        '& li': {
            padding: "0px 8px"
        }
    },
    dialogBanner: {

    },
    nestedPadding: {
        paddingLeft: "30px"
    },
    linkColor: {
        color: "#FFD523",
    },
    timestamp: {
        color: "#828282"
    },

});

export default function Activity(props) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Typography variant="h6" style={{ color: "#FFD523" }}>
                Activity
            </Typography>
            <List className={classes.backDrop}>
                <Typography variant="h6">
                    Yesterday
                </Typography>
                <br></br>
                {["Captain America: Civil War", "Venom", "Marvel's : The Avengers"].map(movie => {
                    return <ListItem>
                        <Box display="flex" flexDirection="column">
                            <Box display="flex" direction="row" className={classes.posterCardDetails} alignItems="center">
                                <Avatar alt="Remy Sharp" src="https://bit.ly/dan-abramov" className={classes.large} />
                                <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                    <Typography variant="body2" display="block" align={"left"}>
                                        Recently watched <Link className={classes.linkColor} to="/detail">{movie}</Link>
                                    </Typography>
                                    <Typography variant="caption" display="block" align={"left"} className={classes.timestamp}>
                                        16.04
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </ListItem>
                })}

            </List>
            <List className={classes.backDrop}>
                <Typography variant="h6">
                    Last Week
                </Typography>
                <br></br>
                <ListItem>
                    <Box display="flex" flexDirection="column">

                        <Box display="flex" direction="row" className={classes.posterCardDetails} justifyContent="space-between" alignItems="center">
                            <Avatar alt="Remy Sharp" src="https://bit.ly/kent-c-dodds" className={classes.large} />
                            <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                <Typography variant="body2" display="block" align={"left"}>
                                    Liked <Link className={classes.linkColor} to="/detail">Captain America : Civil War</Link>
                                </Typography>
                                <Typography variant="caption" display="block" align={"left"} className={classes.timestamp}>
                                    3d
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
            </List>
            <List className={classes.backDrop}>
                <Typography variant="h6">
                    Last Month
                </Typography>
                <br></br>
                <ListItem>
                    <Box display="flex" flexDirection="column">

                        <Box display="flex" direction="row" className={classes.posterCardDetails} justifyContent="space-between" alignItems="center">
                            <Avatar alt="Remy Sharp" src="https://bit.ly/dan-abramov" className={classes.large} />
                            <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                <Typography variant="body2" display="block" align={"left"}>
                                    Recently watched <Link className={classes.linkColor} to="/detail">Captain America : Civil War</Link>
                                </Typography>
                                <Typography variant="caption" display="block" align={"left"} className={classes.timestamp}>
                                    17d
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box display="flex" flexDirection="column">

                        <Box display="flex" direction="row" className={classes.posterCardDetails} justifyContent="space-between" alignItems="center">
                            <Avatar alt="Remy Sharp" src="https://bit.ly/ryan-florence" className={classes.large} />
                            <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                <Typography variant="body2" display="block" align={"left"}>
                                    Added <Link className={classes.linkColor} to="/detail">The Social Network</Link> to their watch list
                                </Typography>
                                <Typography variant="caption" display="block" align={"left"} className={classes.timestamp}>
                                    17d
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
                <ListItem>
                    <Box display="flex" flexDirection="column">

                        <Box display="flex" direction="row" className={classes.posterCardDetails} justifyContent="space-between" alignItems="center">
                            <Avatar alt="Remy Sharp" src="https://bit.ly/ryan-florence" className={classes.large} />
                            <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                <Typography variant="body2" display="block" align={"left"}>
                                    Recently joined <Link className={classes.linkColor} to="/detail">Saturday Night Movies</Link>
                                </Typography>
                                <Typography variant="caption" display="block" align={"left"} className={classes.timestamp}>
                                    21d
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </ListItem>
            </List>
            <br></br>
            <br></br>
        </div>
    )
}
