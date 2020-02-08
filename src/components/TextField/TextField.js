import React from 'react';
import './TextField.css'

const TextField = (props) => {
    return ( 
        <div className="TextField">
            <input type={props.type} placeholder={props.placeholder} autoComplete="off"/>
        </div>
     );
}
 
export default TextField;