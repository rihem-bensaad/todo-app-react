import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { v4 as uuidv4 } from "uuid";
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    checkedStyle: {
        textDecoration: "line-through"
    }
}));

export default function TodoList({ data, handleDeleteTodo, handleDelete }) {
    const classes = useStyles();
    const [checked, setChecked] = React.useState([false]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        value.checked = !value.checked
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
       
    };

    return (
        <List className={classes.root}>
            {data.map((value) => {
                const labelId = `checkbox-list-label-${value.checked}`;

                return (
                    <ListItem key={uuidv4()} role={undefined} dense button onClick={handleToggle(value)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={value.id} primary={value.task} className={value.checked ? classes.checkedStyle : null} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" >
                                <DeleteIcon onClick={() => { handleDeleteTodo(value.id) }} />
                                
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
            {/* <button onClick={() => { handleDelete()}}>delete</button> */}
        </List>
    );
}