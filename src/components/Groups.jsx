import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import StarIcon from '@material-ui/icons/Star';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import Chip from '@material-ui/core/Chip';
import TimerIcon from '@material-ui/icons/Timer';
import StarRateIcon from '@material-ui/icons/StarRate';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import YouTube from 'react-youtube';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useHistory } from 'react-router-dom';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import GroupDetail from './GroupDetail';

const useStyles = makeStyles({
    root: {
        background: "#1B1B1B",
        minHeight: "100vh",
        padding: "20px",
        color: "white"
    },
    avatarGroup: {
        '& > div': {
            height: "20px",
            width: "20px",
            fontSize: "10px",
            backgroundColor: "#fc2046",
            marginRight:"3px",
            border:0
        },
    },
    mainAvatar: {
        height: "50px",
        width: "50px",
        backgroundColor: "#fc2046",
    },
    dotSeperator: {
        fontSize: "8px",
        marginLeft: "5px",
        marginRight: "5px",
        color: "#828282"
    },
});
export default function Groups() {
    const classes = useStyles();
    const history = useHistory()
    const [sortParam, setSortParam] = React.useState('Last Added');
    const [open, setOpenState] = React.useState(false);
    const [groupName, setGroupName] = React.useState("");

    const handleChange = (event) => {
        setSortParam(event.target.value);
    };

    const goBack = () => {
        history.go(-1)
    }

    const openGroup = (groupName) => {
        history.push({ pathname: "/favorites", state: { "groupName": groupName } })
    }

    const dialogStatus = (status, groupName) => {
        setOpenState(status)
        setGroupName(groupName)
    }

    return (
        <div className={classes.root}>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth size={"small"} />
            <div style={{ paddingTop: "30px", paddingBottom: "20px" }}>
                <Divider />
            </div>
            {["Wednesday Night Movies", "Friday Night Movies", "School Group Night Movies", "College Group Night"].map((value) => {
                return (
                    <>
                        <Box display="flex" justifyContent="space-between" alignItems="center" className={classes.listItem}>

                            <Box display="flex" alignItems="center" onClick={() => openGroup(value)}>
                                <Avatar className={classes.mainAvatar}>OP</Avatar>
                                <Box display="flex" flexDirection="column" style={{ padding: "20px" }}>
                                    <Typography variant="subtitle1" display="block" align={"left"}>
                                        {value}
                                    </Typography>
                                    <Box display="flex" alignItems="center" >
                                        <AvatarGroup max={4} className={classes.avatarGroup}>
                                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                                            <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                                            <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                                        </AvatarGroup>
                                        <FiberManualRecordIcon className={classes.dotSeperator} fontSize={"small"} />
                                        <Typography variant="subtitle2" display="block" align={"left"} style={{ marginTop: "5px", color: "#828282" }} >
                                            20 Movies
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box display="flex" flexDirection="column" alignItems="center">
                                <IconButton color="primary" onClick={() => dialogStatus(true, value)}>
                                    <MoreVertIcon fontSize={"large"} style={{ color: "#828282" }} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Divider />
                    </>
                )
            })}
            <br></br>
            <br></br>
            <GroupDetail open={open} dialogStatusProp={dialogStatus} groupName={groupName} />
        </div>
    )
}
