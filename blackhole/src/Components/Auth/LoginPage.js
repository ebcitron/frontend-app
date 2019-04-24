import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../Actions';




class Login extends React.Component {
    state = {
        user: {
            username: '',
            password: ''
        }
    };


    handleChanges = e => {
        this.setState({
            ...this.state,
            user: {
                ...this.state.user,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.user);
        this.setState({
            ...this.state,
            user: {
                username: '',
                password: ''
            }
        })
    };

    render(){
        return(
            <div className = 'login'>
            <form onSubmit = {this.login}>
            <input
                onChange = {this.handleChanges}
                name = 'username'
                value = {this.state.user.username}
                placeholder = "Username"
                type = 'text'
                /> 
             <input
                onChange = {this.handleChanges}
                name = 'password'
                value = {this.state.user.password}
                placeholder = "Password"
                type = 'text'
                />
            </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loggingIn: state.loggingIn
    };
};

export default connect( mapStateToProps, {login})(Login);