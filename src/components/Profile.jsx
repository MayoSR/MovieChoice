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

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
    },
    dialogBanner: {

    },
    groupDP: {
        height: "200px",
        width: "200px",
        borderRadius: "50%",
        boxShadow: "1px 0px 21px 4px rgba(0,0,0,0.27)"
    },
    nestedPadding:{
        paddingLeft:"30px"
    }
});

export default function Profile(props) {
    const classes = useStyles();
    const history = useHistory()
    const location = useLocation();
    const goBack = () => {
        history.go(-1)
    }


    const goToFavorites = () => {
        history.push({pathname: "/favorites", state: { "groupName": "My Favorites" }})
    }

    const goToFriends = () =>{
        history.push("/friends")
    }

    return (
        <div className={classes.root}>
            <List className={classes.backDrop}>
                <ListItem button>
                    <Box display="flex" flexDirection="column" alignItems="center" style={{ width: "100%",margin:"20px 0" }}>
                        <Box style={{ overflow: "hidden" }} className={classes.groupDP}>

                            <img src="/images/actors/tom_holland.jpg" alt="group dp" />
                        </Box>

                    </Box>
                </ListItem>
                <Divider />
                <ListItem>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="body1">
                            Details
                        </Typography>
                    </Box>
                </ListItem>
                <Divider />
                <ListItem className={classes.nestedPadding}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="subtitle2">
                            GeorgeRussell63@gmail.com
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <EmailIcon />
                        </IconButton>
                    </Box>
                </ListItem>
                <ListItem className={classes.nestedPadding}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="subtitle2">
                            GeorgeRussell63
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <AlternateEmailIcon />
                        </IconButton>
                    </Box>
                </ListItem>
                <Divider />
                <ListItem className={classes.nestedPadding}>

                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="subtitle2">
                            George Russell
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <PersonIcon />
                        </IconButton>
                    </Box>
                </ListItem>
                <Divider />
                <ListItem button onClick={goToFavorites}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }} >
                        <Typography variant="body1">
                            Liked Movies
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <TheatersIcon fontSize={"medium"} />
                        </IconButton>
                    </Box>
                </ListItem>
                {/* <Divider />
                <ListItem button>
                    <Button variant="outlined" color="secondary" fullWidth>
                        Leave Group
                    </Button>
                </ListItem> */}
                <Divider />
                <ListItem button onClick={goToFriends}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="body1">
                            Friends
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <PeopleAltIcon fontSize={"medium"} />
                        </IconButton>
                    </Box>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="body1">
                            Help and Support
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <LiveHelpIcon fontSize={"medium"} />
                        </IconButton>
                    </Box>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="body1">
                            FAQs
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <QuestionAnswerIcon fontSize={"medium"} />
                        </IconButton>
                    </Box>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Box display="flex" justifyContent="space-between" alignItems="center" style={{ width: "100%" }}>
                        <Typography variant="body1">
                            Security
                        </Typography>
                        <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                            <SecurityIcon fontSize={"medium"} />
                        </IconButton>
                    </Box>
                </ListItem>
                <Divider />
            </List>
            <br></br>
            <br></br>
        </div>
    )
}
