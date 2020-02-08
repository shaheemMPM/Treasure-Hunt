import React, { Component } from 'react';
import './Auth.css';

import Form from '../../components/Form/Form';

class Auth extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="Auth">
                <Form />
            </div>
        );
    }
}
 
export default Auth;