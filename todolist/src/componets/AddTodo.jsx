import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '40ch',
        },
    },
    addTodo: {
        display: "flex",
        margin: theme.spacing(1),
        flexDirection: 'row',
        flexWrap: 'wrap'

    },
    buttons: {
        maxHeight: "40px",
        padding: "2%"
    }
}));

export default function AddTodo({ task, handleAddTodo, handleChange }) {
    const classes = useStyles();


    return (
        <div className={classes.addTodo}>
            <form className={classes.root} noValidate autoComplete="off" >
                <TextField id="outlined-basic" label="Add todo" variant="outlined" value={task} onChange={(e) => { handleChange(e) }} />
            </form>
            <Button variant="contained" className={classes.buttons} onClick={() => { handleAddTodo(task) }}>Add a todo</Button>
        </div>
    );
}