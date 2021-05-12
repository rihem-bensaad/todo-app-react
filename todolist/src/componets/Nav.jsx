import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "../styles/App.css"
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },

    },
    border: {
        borderBottom: "1px solid black"
    }
}));

export const Nav = ({ completed }) => {
    const classes = useStyles();

    return (
        <div className={classes.border}>

            <div className={classes.root}>
                <Button>All</Button>
                <Button color="primary">Active</Button>
                <Button color="secondary" onClick={completed}>Completed</Button>
            </div>
        </div>
    );
}