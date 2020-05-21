import React from 'react';
import './UserInput.css';

const userInput = (props) => {
    return (
        <div className="UserInput">
            <p>Enter Username</p>
            <input type="text" onChange={props.changed} value={props.currentName}/>
        </div>
    )
};

export default userInput;