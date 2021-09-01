import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import MovieFilterIcon from '@material-ui/icons/MovieFilter';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';

const useStyles = makeStyles({
    root: {
        width: "100%",
        position: 'fixed',
        zIndex:"120",
        bottom: 0,
        boxShadow: '1px -1px 5px 0px rgba(0,0,0,0.15);',
        background:"rgb(252, 32, 70)",
        '& svg,span':{
            color: "black"
        },
    },
});

export default function Navbar() {
    const classes = useStyles();
    const [value, setValue] = React.useState('movies');
    let history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue);
        history.push("/"+newValue);
    };

    return (
        <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
            <BottomNavigationAction label="Movie" value="movies" icon={<MovieFilterIcon />} />
            <BottomNavigationAction label="Groups" value="groups" icon={<PeopleAltIcon />} />
            <BottomNavigationAction label="Profile" value="profile" icon={<AccountBoxIcon />} />
            <BottomNavigationAction label="Activity" value="activity" icon={<FitnessCenterIcon />} />
        </BottomNavigation>
    );
}
