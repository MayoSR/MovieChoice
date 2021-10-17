import { Box } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import React from 'react';
import { useHistory } from 'react-router-dom';
import GroupDetail from './GroupDetail';

const useStyles = makeStyles({
    root: {
        minHeight: "100vh",
        padding: "20px",
    },
    '& p,span,label': {
        fontFamily: "Open Sans, sans-serif"
    },
    avatarGroup: {
        '& > div': {
            height: "20px",
            width: "20px",
            fontSize: "10px",
            backgroundColor: "#595260",
            marginRight: "3px",
            border: 0
        },
    },
    mainAvatar: {
        height: "50px",
        width: "50px",
        backgroundColor: "#595260",
    },
    dotSeperator: {
        fontSize: "8px",
        marginLeft: "5px",
        marginRight: "5px",
        color: "#828282"
    },
    ip: {
        '& input,div,label,fieldset': {
            color: "#F4F6FF",
            borderColor: "#595260"
        }
    }
});
export default function Groups() {
    const classes = useStyles();
    const history = useHistory()
    const [open, setOpenState] = React.useState(false);
    const [groupName, setGroupName] = React.useState("");

    const openGroup = (groupName) => {
        history.push({ pathname: "/favorites", state: { "groupName": groupName } })
    }

    const dialogStatus = (status, groupName) => {
        setOpenState(status)
        setGroupName(groupName)
    }

    return (
        <div className={classes.root}>
            <TextField id="outlined-basic" label="Search" variant="outlined" fullWidth size={"small"} className={classes.ip} />
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
                                    <Typography variant="subtitle1" display="block" align={"left"} style={{ color: "#FFD523" }}>
                                        {value}
                                    </Typography>
                                    <Box display="flex" alignItems="center" >
                                        <AvatarGroup max={4} className={classes.avatarGroup}>
                                            <Avatar alt="Remy Sharp" src="https://bit.ly/dan-abramov" />
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
