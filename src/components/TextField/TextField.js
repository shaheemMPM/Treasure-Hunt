import React from 'react';

const TextField = (props) => {
    return ( 
        <div>
            <input type={props.type} placeholder={props.placeholder} autoComplete="off"/>
        </div>
     );
}
 
export default TextField;