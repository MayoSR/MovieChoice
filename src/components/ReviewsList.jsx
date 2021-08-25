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
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { useHistory } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ShareIcon from '@material-ui/icons/Share';

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
    ratingStar: {
        color: "#ffbf00",
        '& svg': {
            height: "15px",
            width: "15px",
        }
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function ReviewsList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const history = useHistory()

    const goBack = () => {
        history.go(-1)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        props.dialogStatusProp(false)
    };

    return (
        <div className={classes.backDrop}>
            <Box display="flex" justifyContent="space-between" alignItems="center" style={{ marginBottom: "20px" }}>
                <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                    <ArrowBackIcon fontSize={"large"} />
                </IconButton>
                <Box>
                    <Typography variant="h6" display="block" align={"left"}>
                        Reviews
                    </Typography>
                </Box>
                <Box>
                    <IconButton color="primary" aria-label="go back" className={classes.backButton} onClick={goBack}>
                        <ShareIcon fontSize={"medium"} />
                    </IconButton>
                </Box>
            </Box>
            <List >
                {["Anne George", "Beth Chase", "Cathy Jones", "John Joestar", "James Rodriguez", "Jimmy Neutron"].map((person) => {

                    return (
                        <>
                            <ListItem button>
                                <Box display="flex" flexDirection="column" style={{paddingTop:"10px"}}>
                                    <Box display="flex">
                                        <Box display="flex" style={{ marginRight: "20px" }}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                                        </Box>
                                        <Box display="flex" alignItems="center" justifyContent="space-between" style={{ width: "100%" }}>
                                            <Box display="flex" flexDirection="column">
                                                <Typography variant="body1" display="block" align={"left"}>
                                                    {person}
                                                </Typography>
                                                <Typography variant="caption" display="block" align={"left"} style={{"color":"#828282"}}>
                                                    2 days ago
                                                </Typography>
                                            </Box>

                                            <Box display="flex" className={classes.ratingStar}>
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarIcon />
                                                <StarOutlineIcon />
                                            </Box>
                                        </Box>
                                    </Box>
                                    <div style={{ paddingTop: "10px", paddingBottom: "10px" }}>
                                    </div>
                                    <Box>
                                        <Typography variant="caption" display="block" align={"left"}>
                                            SpiderMan Homecoming is one of the most fun, exciting, and easily rewatchable films in the entire MCU. Tom Holland has a great performance as a young, inexperienced adaptation of Peter Parker.
                                        </Typography>
                                    </Box>
                                </Box>

                            </ListItem>
                            <Divider />
                        </>
                    )

                })}
            </List>
        </div>
    );
}
