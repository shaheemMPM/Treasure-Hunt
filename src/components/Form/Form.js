import React, { Component } from 'react';
import './Form.css';

import TextField from '../TextField/TextField';
import Button from '../Button/Button';

class Form extends Component {
    state = {  }

    formSubmitHandler = () => {
        console.log("Form Submitted");
    }

    render() { 
        return ( 
            <form className="Form">
                <h2>Hunt the Hint</h2>
                <TextField type="text" placeholder="user name"/>
                <TextField type="password" placeholder="code"/>
                <Button content="Let's Go" clicked={this.formSubmitHandler}/>
            </form>  
        );
    }
}
 
export default Form;