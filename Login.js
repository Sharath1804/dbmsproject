//Render login component
//if not authenticated, go back to login
import React from 'react';
import axios from 'axios';

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error : false,
			username : '',
			password : ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.loginError = this.loginError.bind(this);

	}

	handleChange(e) {
		var state = this.state;
		if(e.target.name === 'username') {
			state.username = e.target.value;
		}
		if(e.target.name === 'password') {
			state.password = e.target.value;
		}
		this.setState(state);
	}

	handleLogin() {
		console.log("username = " + this.state.username);
		console.log("password = " + this.state.password);
		var loginurl = 'http://localhost:8000/gymapp2/api-token-auth/';
		var loginObject = {
			username : this.state.username,
			password : this.state.password
		}
		axios.post(loginurl, loginObject)
		.then(function(response) {
			console.log(response.data.token);
			localStorage.setItem('token',response.data.token);
			this.props.loginSuccess();
		}.bind(this))
		.catch(function(error) {
			console.log(error);
			var state = this.state;
			state.error = true;
			this.setState(state);
		}.bind(this)
		)
	}

	loginError() {
		var style = {
			'background' : 'red',
			'margin' : '10px',
			'padding' : '10px',
		}
		if(this.state.error == true) {
			return(
				<div style={style}>
				<h2>Login Error</h2>
				</div>
			)
		}
	}

    render() {
        return (
			<div>
			{this.loginError()}
            <div>
            <input type="text" name="username" placeholder="Username" onChange={this.handleChange}/>
            </div>
            <div>
            <input type="password" name="password" placeholder="Password" onChange={this.handleChange}/>
            </div>
            <div>
            <button onClick={this.handleLogin}>Login</button>
			<button onClick={this.props.signup}>Sign Up</button>
            </div>
			</div>
        )
    }
}


export default Login;
