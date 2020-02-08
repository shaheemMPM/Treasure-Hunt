import React, { Component } from 'react';
import firebase from 'firebase';
import swal from 'sweetalert';
import './Form.css';

import TextField from '../TextField/TextField';
import Button from '../Button/Button';

import fireConfig from '../../config/firebase.config';

firebase.initializeApp(fireConfig);

class Form extends Component {
    state = { 
        username: '',
        code: '',
        data: ''
     }

    formSubmitHandler = (event) => {
        firebase.database().ref('/code/'+this.state.code+'/'+this.state.username+'/').once('value')
            .then((snapshot) => {
                console.log(snapshot.val());
                if (snapshot.val() === null) {
                    swal("Wrong...");
                }else{
                    swal(snapshot.val().hint);
                }
            }).catch(e => console.log(e.code));
        event.preventDefault();
    }

    nameChangedHandler = (event) => {
        this.setState({username: event.target.value});
    }

    codeChangedHandler = (event) => {
        this.setState({code: event.target.value});
    }

    render() { 
        return ( 
            this.state.data !== null ? 
            <form className="Form">
                <h2>Hunt the Hint</h2>
                <TextField type="text" placeholder="user name" textChanged={this.nameChangedHandler}/>
                <TextField type="password" placeholder="code" textChanged={this.codeChangedHandler}/>
                <Button content="Let's Go" clicked={this.formSubmitHandler}/>
            </form>  
            : 
            <form className="Form">
                <h2>Hint!!</h2>
            </form>
        );
    }
}
 
export default Form;