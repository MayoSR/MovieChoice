import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Slide from '@material-ui/core/Slide';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    backDrop: {
        background: "#2C2E43"
    },
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
        color:"#B2B1B9"
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
    removeFriendBtn: {
        position: "absolute",
        padding:0,
        height:"12px",
        width:"12px",
        bottom:"0px",
        right:"0px",
        background:"#FFD523",
        '& svg':{
            color:"#595260",
            fontSize:"12px"
        }
    },
    groupMembers:{
        paddingTop:"20px",
        overflowX:"scroll",
        '&::-webkit-scrollbar': {
            width: "0px"
        },
    }

}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateGroup(props) {
    const classes = useStyles();
    const handleClose = () => {
        props.dialogStatusProp(false)
    };

    const [groupList, setGroupList] = React.useState([])

    const createFriendAvatar = (person) => {
        setGroupList([...groupList,person])
    }

    const removeFriend = (friend) => {
        setGroupList(groupList.filter(person => person !== friend))
    }

    return (
        <Dialog open={props.open} onClose={handleClose} TransitionComponent={Transition} fullScreen>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={() => { props.setDialogState(false) }} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        New Group
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        Create
                    </Button>
                </Toolbar>
            </AppBar>
            <List className={classes.backDrop}>
                <ListItem button>
                    <Box display="flex" flexDirection="column" alignItems="center" style={{ width: "100%" }}>
                        <Box style={{ overflow: "hidden" }} className={classes.groupDP}>

                            <img src="/images/posters/amazing_spiderman.jpg" alt="group dp" />
                        </Box>

                    </Box>
                </ListItem>
                <Divider />
                <ListItem>
                    <TextField id="outlined-basic" label="Group Name" variant="outlined" fullWidth size={"small"} className={classes.ip} />
                </ListItem>
                <Divider />
                <ListItem className={classes.groupMembers}>
                    {groupList.map((person) => {
                        return <Box display="flex" style={{ marginRight: "20px", position: "relative" }}>
                            <Avatar alt={person} src="/static/images/avatar/1.jpg" className={classes.large} />
                            <IconButton className={classes.removeFriendBtn} onClick={() => { removeFriend(person) }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                    })}
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography variant="h5">
                        Friends
                    </Typography>
                </ListItem>
                <Divider />
                <ListItem>
                    <TextField id="outlined-basic" label="Search Friend" variant="outlined" fullWidth size={"small"} className={classes.ip} />
                </ListItem>
                <Divider />
                {["Anne George", "Beth Chase", "Cathy Jones", "John Joestar", "James Rodriguez", "Jimmy Neutron"].map((person) => {

                    return (
                        <>
                            <ListItem button onClick={() => createFriendAvatar(person)}>
                                <Box display="flex" style={{ marginRight: "20px" }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />

                                </Box>
                                <ListItemText primary={person} secondary={person.replace(" ","")+"63"} className={classes.listItemTextStyle} />
                            </ListItem>
                            <Divider />
                        </>
                    )

                })}
            </List>
        </Dialog>
    );
}
