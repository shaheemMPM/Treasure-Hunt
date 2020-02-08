import React, { Component } from 'react';
import firebase from 'firebase';
import swal from 'sweetalert';
import './Form.css';

import TextField from '../TextField/TextField';
import Button from '../Button/Button';
import Loading from '../Loading/Loading';

import fireConfig from '../../config/firebase.config';

firebase.initializeApp(fireConfig);

class Form extends Component {
    state = { 
        username: '',
        code: '',
        data: '',
        isLoading: false
     }

    formSubmitHandler = (event) => {
        this.setState({isLoading: true});
        firebase.database().ref('/code/'+this.state.code+'/'+this.state.username+'/').once('value')
            .then((snapshot) => {
                this.setState({isLoading: false});
                if (snapshot.val() === null) {
                    swal({
                        title: "You are so wrong.. ",
                        text: "Better Luck Next Time",
                        icon: "error",
                        button: "Try Again",
                    });
                }else{
                    swal({
                        title: "You Cracked the Code !!",
                        text: snapshot.val().hint,
                        icon: "success",
                        button: "Let's Go",
                    });
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
            !this.state.isLoading ?
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
            : <Loading />
        );
    }
}
 
export default Form;