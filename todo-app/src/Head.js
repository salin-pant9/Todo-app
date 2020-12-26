import { Avatar, Checkbox, Radio } from '@material-ui/core';
import React,{useEffect, useState} from 'react'
import Body from './Body';
import './Head.css';
function Head() {
    const [input , setInput] = useState('');
    const [todos,setTodos] = useState([]);
    const todos1 = todos.reverse();
    
    console.log(todos.length-1);
    const post = (e) => {
        e.preventDefault();
        setTodos([...todos,input]);
        setInput('');
        
    }
    return (
        <div>

            <div className="head">
                <h1>TODO APP</h1>
                <form >
                    <input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter the todos' type="text"/>
                    <button onClick={post} type='submit'>Click here</button>
                    
                </form>
                <div className="head__icon">
                    <Avatar src="https://image.shutterstock.com/image-vector/monkey-sunglasses-cool-gorilla-260nw-1063902011.jpg "/>
                </div>
            
            </div>
               
               
                {todos1.map((todo) => (
                    <Body todo={todo} />
                ))}
                
    
        </div>
    )
}

export default Head
