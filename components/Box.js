import React from 'react';
import './Box.css';


const Box = (props) => {
    return (
        <div className="box">
            <h3>{props.question}</h3>
            <span>+</span>
        </div>

    )
}


export default Box;