
import React from 'react';

import './Body.css'; 
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
function Body({ todo,id,deleteItem }) {
    
    
    return (
        <> 
            <div className="body__todo">
                <ArrowForwardIosOutlinedIcon style={{color:'purple'}}/>
                <li className="list">{todo}</li>
                <button onClick={() => deleteItem(id)}>Delete</button>

            </div>
        </>
    )
}

export default Body
