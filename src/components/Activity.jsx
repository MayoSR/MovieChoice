import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import AddBoxIcon from '@material-ui/icons/AddBox';
import IconButton from '@material-ui/core/IconButton';
import TheatersIcon from '@material-ui/icons/Theaters';
import PersonIcon from '@material-ui/icons/Person';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import EmailIcon from '@material-ui/icons/Email';
import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import SecurityIcon from '@material-ui/icons/Security';
import StarRateIcon from '@material-ui/icons/StarRate';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const useStyles = makeStyles({
    root: {
        background: "#FFF",
        minHeight: "100vh",
        color: "black",
        padding: "20px",
        '& li':{
            padding:"0px 8px"
        }
    },
    dialogBanner: {

    },
    nestedPadding: {
        paddingLeft: "30px"
    },
    linkColor: {
        color: "rgba(252, 32, 70,1)",
    },
    timestamp:{
        color:"#828282"
    },
    
});

export default function Activity(props) {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation();
    const goBack = () => {
        history.go(-1)
    }


    return (
        <div className={classes.root}>
            <Typography variant="h6">
                Activity
            </Typography>
            <List className={classes.backDrop}>
                <Typography variant="h6">
                    Yesterday
                </Typography>
                <br></br>
                {[1, 2, 3].map(ele => {
                    return <ListItem>
                        <Box display="flex" flexDirection="column">

                            <Box display="flex" direction="row" className={classes.posterCardDetails} justifyContent="space-between" alignItems="center">
                                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                                <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                    <Typography variant="subtitle2" display="block" align={"left"}>
                                        Recently watched <Link className={classes.linkColor} to="/detail">Captain America : Civil War</Link>
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
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                            <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                <Typography variant="subtitle2" display="block" align={"left"}>
                                    Recently watched <Link className={classes.linkColor} to="/detail">Captain America : Civil War</Link>
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
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                            <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                                <Typography variant="subtitle2" display="block" align={"left"}>
                                    Recently watched <Link className={classes.linkColor} to="/detail">Captain America : Civil War</Link>
                                </Typography>
                                <Typography variant="caption" display="block" align={"left"} className={classes.timestamp}>
                                    17d
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
