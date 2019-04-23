import React from 'react';
import {connect} from 'react-redux';
import {register, login } from '../../Actions';




class Login extends React.Component{
    state = {
        user: {
            username: '',
            password: ''
        },
        registrator: {
            username: '',
            password: '',
        },
        registered: localStorage.getItem('token') ? true: false;
    };

    
}