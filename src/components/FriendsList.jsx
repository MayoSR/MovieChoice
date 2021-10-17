import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    backDrop: {
        minHeight: "100vh",
        background: "#2C2E43"
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    dialogBanner: {

    },
    groupDP: {
        height: "200px",
        width: "200px",
        borderRadius: "50%"
    },
    listItemTextStyle: {
        '& p': {
            color: "#828282"
        }

    },
    ip: {
        '& input,div,label,fieldset': {
            color: "#F4F6FF",
            borderColor: "#595260"
        }
    },
    avatarGroup: {
        '& > div': {
            height: "30px",
            width: "30px",
            fontSize: "14px",
            backgroundColor: "#595260",
            marginRight: "3px",
            border: 0
        },
    },

}));


export default function FriendsList(props) {
    const classes = useStyles();

    return (
        <List className={classes.backDrop}>
            <ListItem display="flex" alignItems="center">
                <Typography variant="h5" display="block" gutterBottom>
                    Add a Friend
                </Typography>
            </ListItem>
            <Divider />
            <ListItem >
                <Box display="flex" alignItems="center" style={{ width: "100%" }}>

                    <TextField id="outlined-basic" label="Friend Code" variant="outlined" fullWidth size={"small"} className={classes.ip} />
                    <Button variant="contained" color="primary" style={{ height: "40px" }}>
                        Add
                    </Button>

                </Box>
            </ListItem>
            <Divider />
            <ListItem display="flex" alignItems="center">
                <Typography variant="h5" display="block" gutterBottom>
                    Friend Requests
                </Typography>
            </ListItem>
            <Divider />
            {["Anne George", "Beth Chase", "Cathy Jones"].map((person) => {

                return (
                    <>
                        <ListItem>
                            <Box display="flex" style={{ width: "100%", padding: "8px 0px" }} justifyContent="space-between" >
                                <Box display="flex" alignItems="center">
                                    <Avatar alt="Remy Sharp" src="https://bit.ly/dan-abramov" className={classes.large} style={{ marginRight: "20px" }} />
                                    <ListItemText primary={person} secondary={person + "63"} className={classes.listItemTextStyle} />
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <Button variant="outlined" color="primary" size={"small"} style={{ fontSize: "0.55rem" }}>
                                        Accept
                                    </Button>
                                </Box>
                            </Box>
                        </ListItem>
                        <Divider />
                    </>
                )

            })}

            <ListItem>
                <Button variant="outlined" color="secondary" fullWidth size={"small"}>
                    See more
                </Button>
            </ListItem>
            <Divider />
            <ListItem display="flex" alignItems="center">
                <Typography variant="h5" display="block" gutterBottom>
                    Friends
                </Typography>
            </ListItem>
            <Divider />
            {["Anne George", "Beth Chase", "Cathy Jones", "John Joestar", "James Rodriguez", "Jimmy Neutron"].map((person) => {

                return (
                    <>
                        <ListItem>
                            <Box display="flex" style={{ width: "100%", padding: "8px 0px" }} justifyContent="space-between" >
                                <Box display="flex" alignItems="center">
                                    <Avatar alt="Remy Sharp" src="https://bit.ly/dan-abramov" className={classes.large} style={{ marginRight: "20px" }} />
                                    <ListItemText primary={person} secondary={person + "63"} className={classes.listItemTextStyle} />
                                </Box>
                                <Box display="flex" alignItems="center">
                                    <Button variant="outlined" color="primary" size={"small"} style={{ fontSize: "0.55rem" }}>
                                        Remove
                                    </Button>
                                </Box>
                            </Box>
                        </ListItem>
                        <Divider />
                    </>
                )

            })}
        </List>
    );
}
