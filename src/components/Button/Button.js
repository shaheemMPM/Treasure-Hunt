import React from 'react';

const Button = (props) => {
    return ( 
        <button onClick={props.clicked}>{props.content}</button>
    );
}
 
export default Button;