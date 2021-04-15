import React from "react";

import { makeStyles } from "@material-ui/styles";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from "@material-ui/icons/Person";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FlightIcon from "@material-ui/icons/Flight";

const useStyles = makeStyles({
    icon: {
        color: "#424242",
    },
});

export const MySchoolIcon = () => {
    const classes = useStyles();
    return (
        <div>
            <SchoolIcon className={classes.icon} />
        </div>
    );
};

export const MyHomeIcon = () => {
    const classes = useStyles();
    return (
        <div>
            <HomeIcon className={classes.icon} />
        </div>
    );
};

export const MyWorkIcon = () => {
    const classes = useStyles();
    return (
        <div>
            <WorkIcon className={classes.icon} />
        </div>
    );
};

export const MyPersonIcon = () => {
    const classes = useStyles();
    return (
        <div>
            <PersonIcon className={classes.icon} />
        </div>
    );
};

export const MyShoppingCartIcon = () => {
    const classes = useStyles();
    return (
        <div>
            <ShoppingCartIcon className={classes.icon} />
        </div>
    );
};

export const MyFlightIcon = () => {
    const classes = useStyles();
    return (
        <div>
            <FlightIcon className={classes.icon} />
        </div>
    );
};
