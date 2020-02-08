import React from 'react';
import './TextField.css'

const TextField = (props) => {
    return ( 
        <div className="TextField">
            <input 
                onChange={props.textChanged}
                type={props.type} 
                placeholder={props.placeholder} 
                autoComplete="off"/>
        </div>
     );
}
 
export default TextField;