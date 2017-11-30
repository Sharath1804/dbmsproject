//Render login component
//if not authenticated, go back to login
import React from 'react';
import axios from 'axios'


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
		var axiosInstance = axios.create({
			headers : {Authorization:null}
		});
		axiosInstance.post(loginurl, loginObject)
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
			'text-align' : 'center',
			'background' : 'red',
			'margin' : '10px',
			'padding' : '10px',
		}
		if(this.state.error == true) {
			return(
				<div style={style} >
				<h2 >Login Error</h2>
				</div>
			)
		}
	}

    render() {
        return (
			<div>
			{this.loginError()}
			<div>
    		<center>
				<h3>Login</h3>
				<div>{this.state.usernameStatus}</div>
   			 </center>
   			 <center>
				<div className="row">
   				 <form className="col s5 offset-s5 valign">
     			 <div className="row ">
       				 <div className="input-field col s6 ">
        		<input type="text" name="username" onBlur={this.handleChange} required/>
          		<label for="UserName">User name</label>
       			 	</div>
      			</div>
     			 <div className="row">
        			<div className="input-field col s6">
        			 <input type="password" name="password" onBlur={this.handleChange} required/>
         			 <label for="password">Password</label>
        			</div>
     				 </div>
    				</form>
 				 	</div>
  			</center>
			<center>
  				  <button className="waves-effect waves-light btn offset-s6 " onClick={this.handleLogin }>Login</button>
				  <button className="waves-effect waves-light btn offset-s10" onClick={this.props.signup}>Sign Up</button>
    		</center>
			</div>
			</div>
        )
    }
}


export default Login;
