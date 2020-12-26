import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
import React from 'react';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import DeleteIcon from '@material-ui/icons/Delete';
import './Body.css'; 
function Body({todo}) {
    const date = new Date();
    return (
        <List>
            <ListItem>
            <ListItemAvatar>
                
                <ArrowForwardIcon style={{color:'black'}} />
               
            </ListItemAvatar>
            <ListItemText style={{fontWeight:'bold'}} primary={todo} secondary={date.getHours().getMinutes().getSeconds()} />
            </ListItem>
            <DeleteIcon/>
        </List>
    )
}

export default Body
