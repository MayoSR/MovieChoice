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
import StarRateIcon from '@material-ui/icons/StarRate';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const useStyles = makeStyles((theme) => ({
    backDrop: {
        minHeight:"100vh",
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
        marginBottom:"20px",
        '& img':{
            height:"200px"
        }
    },
    listItemTextStyle:{
        '& p':{
            color:"#828282"
        }

    },
    posterCardDetails: {
        background:"#f5f5f5",
        '& img': {
            width: "100px",
        },
        overflow: "hidden",
        borderRadius: "20px",
        margin: "20px 0px",
        boxShadow: "10px 10px 15px -14px rgba(0,0,0,0.75);"
    },
    dotSeperator: {
        fontSize: "8px",
        marginLeft: "5px",
        marginRight: "5px",
        color: "#828282"
    },
    ratingStar: {
        color: "#ffbf00",
        marginLeft: "-5px"
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function WatchedDetail(props) {
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
                        {props.groupName !== undefined ? props.groupName.split("_").join(" ").replace(/(^|\s)[A-Za-zÀ-ÖØ-öø-ÿ]/g, c => c.toUpperCase()) : ""}
                    </Typography>
                    <Button autoFocus color="inherit" onClick={handleClose}>
                        save
                    </Button>
                </Toolbar>
            </AppBar>
            <List className={classes.backDrop}>
                <ListItem button>
                <Box display="flex" direction="row" className={classes.posterCardDetails} justifyContent="space-between">
                        <img src={"/images/" + props.groupName + ".jpg"} alt={props.groupName} />
                        <Box display="flex" flexDirection="column" style={{ "margin": "10px" }}>
                            <Box display="flex" justifyContent="space-between">
                                <Box display="flex" flexDirection="column">
                                    <Typography variant="subtitle1" display="block" align={"left"}>
                                    {props.groupName !== undefined ? props.groupName.split("_").join(" ").replace(/(^|\s)[A-Za-zÀ-ÖØ-öø-ÿ]/g, c => c.toUpperCase()) : ""}
                                    </Typography>
                                    <Box display="flex" alignItems="center" justifyContent="flex-start" style={{color:"#828282"}}>
                                        <StarRateIcon fontSize={"medium"} className={classes.ratingStar} />
                                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                                            4.1
                                        </Typography>
                                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                                        <Typography variant="caption" display="block" className={classes.addToPlaylistText}>
                                            2017
                                        </Typography>
                                    </Box>

                                </Box>
                                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="space-between">
                                    <Button variant="outlined" color="primary" size={"small"} style={{ fontSize: "0.55rem" }}>
                                        Watched
                                    </Button>
                                </Box>
                            </Box>

                            <Divider style={{ marginBottom: "10px", marginTop: "5px" }} />
                            <Typography variant="caption" display="block" align={"left"}>
                                Discussions for a sequel to Spider-Man: Homecoming began by October 2016, and the project was confirmed later that year.
                            </Typography>
                            {/* <Divider style={{ marginBottom: "10px", marginTop: "5px" }} />
                            <Box display="flex">
                                <Typography variant="caption" display="block" align={"left"}>
                                    Liked by Anne, Jane and 5 others
                                </Typography>
                            </Box> */}
                        </Box>
                    </Box>
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
