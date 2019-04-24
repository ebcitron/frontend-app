import React from 'react';
import { connect } from 'react-redux';
import { register} from '../../Actions';




class Register extends React.Component {
    state = {
       
        registrator: {
            username: '',
            password: '',
        }
    };


    handleChanges = e => {
        this.setState({
            ...this.state,
            registrator: {
                ...this.state.registrator,
                [e.target.name]: e.target.value
            }
        });
    };

    register = e => {
        e.preventDefault();
        this.props.register(this.state.registrator);
        this.setState({
            ...this.state,
            registrator: {
                username: '',
                password: ''
            },
            registered: true
        });
    };

    render(){
        return(
            <div className = 'login'>
            <form onSubmit = {this.login}>
            <input
                onChange = {this.handleChanges}
                name = 'username'
                value = {this.state.registrator.username}
                placeholder = "Username"
                type = 'text'
                /> 
             <input
                onChange = {this.handleChanges}
                name = 'password'
                value = {this.state.registrator.password}
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