import React, { Component } from 'react';
import firebase from 'firebase';
import Swal from 'sweetalert2';
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
        isLoading: false
     }

    formSubmitHandler = (event) => {
        this.setState({isLoading: true});
        let tempCode = this.state.code.split(" ").join("").toLowerCase();
        firebase.database().ref('/code/'+tempCode+'/'+this.state.username.toLowerCase()+'/')
            .once('value').then((snapshot) => {
                this.setState({isLoading: false, code: '', username: ''});
                if (snapshot.val() === null) {
                    Swal.fire({
                        title: "You are so wrong.. ",
                        text: "Better Luck Next Time",
                        icon: "error",
                        confirmButtonText: "Try Again",
                    });
                }else{
                    Swal.fire({
                        title: "You Cracked the Code !!",
                        html: snapshot.val().hint,
                        icon: "success",
                        confirmButtonText: "Let's Go",
                    });
                }
            }).catch(e => {
                this.setState({isLoading: false, code: '', username: ''});
                if(e.code === "PERMISSION_DENIED"){
                    Swal.fire({
                        title: "Smart Play !!",
                        text: "But not smart enough to crack my code.😎",
                        icon: "warning",
                        confirmButtonText: "Be Smarter",
                    });
                }
            });
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
                <form className="Form">
                    <h2>Hunt the Hint</h2>
                    <TextField type="text" placeholder="user name" textChanged={this.nameChangedHandler}/>
                    <TextField type="text" placeholder="code" textChanged={this.codeChangedHandler}/>
                    <Button content="Let's Go" clicked={this.formSubmitHandler}/>
                </form>
            : <Loading />
        );
    }
}
 
export default Form;