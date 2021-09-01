import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    backDrop: {
        background: "#FFF",
        color: "black",
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
    listItemTextStyle:{
        '& p':{
            color:"#828282"
        }

    },
    ip:{
        '& input,div,label,fieldset':{
            color:"black",
            borderColor:"rgb(252, 32, 70)"
        }
    }
    
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function GroupDetail(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.dialogStatusProp(false)
    };

    return (
        <Dialog open={props.open} onClose={handleClose} TransitionComponent={Transition} fullScreen>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.groupName}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            <List className={classes.backDrop}>
                <ListItem button>
                    <Box display="flex" flexDirection="column" alignItems="center" style={{ width: "100%" }}>
                        <Box style={{ overflow: "hidden" }} className={classes.groupDP}>

                            <img src="/images/photos/amazing_spiderman.jpg" alt="group dp" />
                        </Box>

                    </Box>
                </ListItem>
                <Divider />
                <ListItem>
                    <TextField id="outlined-basic" label="Group Name" variant="outlined" fullWidth size={"small"} className={classes.ip} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <Button variant="outlined" color="secondary" fullWidth>
                        Leave Group
                    </Button>
                </ListItem>
                <Divider />
                <ListItem>
                    <Typography variant="h5">
                        Members
                    </Typography>
                </ListItem>
                <Divider />
                {["Anne George", "Beth Chase", "Cathy Jones", "John Joestar", "James Rodriguez", "Jimmy Neutron"].map((person) => {

                    return (
                        <>
                            <ListItem button>
                                <Box display="flex" style={{ marginRight: "20px" }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                                </Box>
                                <ListItemText primary={person} secondary="Admin" className={classes.listItemTextStyle}  />
                            </ListItem>
                            <Divider />
                        </>
                    )

                })}
            </List>
        </Dialog>
    );
}
