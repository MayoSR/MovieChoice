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
import CancelIcon from '@material-ui/icons/Cancel';

const useStyles = makeStyles((theme) => ({
    backDrop: {
        minHeight: "100vh",
        background: "#1B1B1B",
        color: "white",
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
            color: "white",
            borderColor: "rgb(252, 32, 70)"
        }
    }

}));


export default function FriendsList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.dialogStatusProp(false)
    };

    return (
        <List className={classes.backDrop}>
            <ListItem >
                <Box display="flex" alignItems="center" style={{ width: "100%" }}>

                    <TextField id="outlined-basic" label="Friend Code" variant="outlined" fullWidth size={"small"} className={classes.ip} />
                    <Button variant="contained" color="primary" style={{ height: "40px" }}>
                        Add
                    </Button>

                </Box>
            </ListItem>
            <Divider />
            {["Anne George", "Beth Chase", "Cathy Jones", "John Joestar", "James Rodriguez", "Jimmy Neutron"].map((person) => {

                return (
                    <>
                        <ListItem button>
                            <Box display="flex" style={{ marginRight: "20px",width:"100%",padding:"8px 0px" }} justifyContent="space-between" >
                                <Box display="flex" alignItems="center">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} style={{marginRight:"20px"}} />
                                    <ListItemText primary={person} className={classes.listItemTextStyle} />
                                </Box>
                                <Box>
                                    <IconButton style={{padding:0}}>
                                        <CancelIcon />
                                    </IconButton>
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
