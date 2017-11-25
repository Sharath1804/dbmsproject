import React from 'react';
import axios from 'axios';


class Signup extends React.Component {
	constructor() {
		super();
		this.state = {
			current : 1,
			requestObject : {
				username:'',
				password:'',
				name:'',
				phone:'',
				age:'',
				sex:'',
				email:'',
				allergies:'',
				injuries:'',
				foods:'',
				workouts:'',
				supplements:'',
				usernameStatus:'',
			},
			background : 'white'
		};
		this.handleNext = this.handleNext.bind(this);
		this.handleBack= this.handleBack.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.checkUsername = this.checkUsername.bind(this);
		this.getdata = this.getdata.bind(this);

		this.allfoods = {

		};
		this.allsupplements = {

		};
		this.allexercises = {

		}
	}

	handleNext() {

		var current = this.state.current;
		if(current === 2) {
			this.getdata();
			var currentUpdated = current+1;
			this.setState({
				current : currentUpdated
			});
		}
		else {
			var currentUpdated = current+1;
			this.setState({
				current : currentUpdated
			});
		}
	}


	checkUsername() {
		var username = this.state.requestObject.username;
		var available = false;
		console.log(username);
		var url = 'http://localhost:8000/gymapp2/isavailable?username=' + username;
		var isUsernameAvailable = function() {
			axios.get(url)
			.then(function(response) {
				console.log('got response');
				console.log(response);
				available = response.data.available;

				if(available == "true") {
					var state = this.state;
					state.current = 2;
					state.usernameStatus='';
					this.setState(state)
				}

				else {
					var state = this.state
					state.usernameStatus='User name not available';
					state.background = 'red';
					this.setState(state)

				}
				//	console.log("available = " + available);
			}.bind(this))
			.catch(function(error){
				console.log(error);
			}
			)
		}.bind(this);
		isUsernameAvailable();
	}
	/*
	setTimeout( function() {
	if(available) {
	var state = this.state;
	state.current = 2;
	state.usernameStatus='available';
	this.setState(state)
}
else {
var state = this.state
state.usernameStatus='User name not available';
state.background = 'red';
this.setState(state)

}
}.bind(this), 3000);
*/

getdata() {
	var baseurl = "http://localhost:8000/gymapp2/";
	var foods = baseurl + "allfoods/";
	var exercises= baseurl + "allexercises/";
	var supplements = baseurl + "allsupplements/";
	axios.get(foods)
	.then(function(response){
		this.allfoods = response.data;
		console.log(this.allfoods);
	}.bind(this))
	.catch(function(error){
		console.log('error');
	});

	axios.get(exercises)
	.then(function(response){
		this.allexercises = response.data;
		console.log(this.allexercises);
	}.bind(this))
	.catch(function(error){
		console.log('error');
	});
	axios.get(supplements)
	.then(function(response){
		this.allsupplements = response.data;
		console.log(this.allsupplements);
	}.bind(this))
	.catch(function(error){
		console.log('error');
	});
}


handleFinalSubmit() {
}

handleInputChange(e) {

	const target = e.target;
	var r = this.state.requestObject;
	if(target.name === 'username') {
		r.username = target.value;
	}
	if(target.name === 'password') {
		r.password = target.value;
	}
	if(target.name === 'name') {
		r.name = target.value;
	}
	if(target.name === 'phone') {
		r.phone = target.value;
	}
	if(target.name === 'age') {
		r.age = target.value;
	}
	if(target.name === 'dob') {
		r.dob = target.value;
	}
	if(target.name === 'sex') {
		r.sex= target.value;
	}
	if(target.name === 'email') {
		r.email = target.value;
	}
	var s = this.state;
	s.requestObject = r;
	console.log(s);
	this.setState(s);

}


handleBack() {
	var current = this.state.current;
	var currentUpdated = current-1;
	this.setState({
		current : currentUpdated
	});
}


render() {
	var style = {
		background : this.state.background,
		margin : '10px',
		height : '30px',
		'text-align' : 'center',
		'font-size' : '1.5em'
	};
	if(this.state.current === 1)
	return (
		<div>

		<h1>Enter Username and password</h1>
		<p>This is to login to the application. Pick a unique username.</p>
		<div style={style}>{this.state.usernameStatus}</div>
		<p>
		<input type="text" name="username" onBlur={this.handleInputChange} required/>
		</p>
		<p>
		<input type="password" name="password" onBlur={this.handleInputChange} required/>
		</p>
		<p>
		<button onClick={this.checkUsername}>Next</button>
		</p>
		</div>
	)
	if(this.state.current === 2)
	return (
		<div>
		<p>
		<h1>Second Page. User Information </h1>
		</p>

		<div id='form-div'>
		<input type="text" name="name" placeholder="name" onBlur={this.handleInputChange} defaultValue={this.state.requestObject.name} />
		<input type="text" name="phone" placeholder="phone" onBlur={this.handleInputChange} defaultValue={this.state.requestObject.phone} />
		<input type="text" name="age" placeholder="age" onBlur={this.handleInputChange} defaultValue={this.state.requestObject.age} />
		<input type="text" name="sex" placeholder="sex" onBlur={this.handleInputChange} defaultValue={this.state.requestObject.sex} />
		<input type="text" name="dob" placeholder="dob" onBlur={this.handleInputChange} defaultValue={this.state.requestObject.dob} />
		<input type="text" name="email" placeholder="email" onBlur={this.handleInputChange} defaultValue={this.state.requestObject.dob} />
		</div>

		<p>
		<button onClick={this.handleBack}>Back</button>
		</p>
		<p>
		<button onClick={this.handleNext}>Next</button>
		</p>
		</div>
	)
	if(this.state.current === 3)
	return (
		<div>
		<p>
		<h1>Form Plans</h1>
		</p>
		<div></div>
		<p>
		<button onClick={this.handleBack}>Back</button>
		</p>
		<p>
		<button onClick={this.handleNext}>Next</button>
		</p>
		</div>
	)
	if(this.state.current === 4)
	return (
		<div>
		<p>
		<h1>Fourth Page.Verify data and submit.</h1>
		</p>

		<p>
		<button onClick={this.handleBack}>Back</button>
		</p>

		<p>
		<button onClick={this.handleSubmit}>Submit</button>
		</p>
		</div>
	)
}
}


export default Signup;
