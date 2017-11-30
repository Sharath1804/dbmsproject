import React from 'react';
import axios from 'axios';
import CheckBoxes from './Checkboxes';


class Signup extends React.Component {
	constructor(props) {
		super(props);
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
				exercises:'',
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

		this.addFood = this.addFood.bind(this);
		this.removeFood = this.removeFood.bind(this);

		this.addExercise = this.addExercise.bind(this);
		this.removeExercise = this.removeExercise.bind(this);

		this.addSupplement = this.addSupplement.bind(this);
		this.removeSupplement = this.removeSupplement.bind(this);

		this.addInjury = this.addInjury.bind(this);
		this.removeInjury = this.removeInjury.bind(this);

		this.addAllergy = this.addAllergy.bind(this);
		this.removeAllergy = this.removeAllergy.bind(this);

		this.handleFinalSubmit = this.handleFinalSubmit.bind(this);

		this.allfoods = {

		};
		this.allsupplements = {

		};
		this.allexercises = {

		};

		this.allmuscles = {

		};
		this.fprops = {};
		this.eprops = {};
		this.sprops = {};
		this.food_values_temp = {};
		this.exercises_values_temp = {};
		this.supplements_values_temp = {};
		this.injuries_values_temp= {};
		this.allergies_values_temp= {};
	}

	addFood(v) {
		console.log("Adding " + v);
		this.food_values_temp[v.toString()] = v;
		var x = Object.keys(this.food_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.food_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.foods = final;
		console.log("Request Object" );
		console.log(this.state.requestObject);
		this.setState(state);
		//console.log(this.food_values_temp);
	}
	addExercise(v) {
		console.log("Adding " + v);
		this.exercises_values_temp[v.toString()] = v;
		var x = Object.keys(this.exercises_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.exercises_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.exercises = final;
		console.log("Request Object" );
		console.log(this.state.requestObject);
		this.setState(state);
	}
	addSupplement(v) {
		console.log("Adding " + v);
		console.log("Adding " + v);
		this.supplements_values_temp[v.toString()] = v;
		var x = Object.keys(this.supplements_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.supplements_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.supplements = final;
		console.log("Request Object" );
		console.log(this.state.requestObject);
		this.setState(state);

	}
	removeFood(v) {
		console.log("Removing " + v);
		delete this.food_values_temp[v];
		var x = Object.keys(this.food_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.food_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.foods = final;
		console.log("Request Object");
		console.log(this.state.requestObject);
		this.setState(state);
	}
	removeExercise(v) {
		console.log("Removing " + v);
		console.log("Removing " + v);
		delete this.exercises_values_temp[v];
		var x = Object.keys(this.exercises_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.exercises_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.exercises = final;
		console.log("Request Object");
		console.log(this.state.requestObject);
		this.setState(state);
	}
	removeSupplement(v) {
		console.log("Removing " + v);
		console.log("Removing " + v);
		console.log("Removing " + v);
		delete this.supplements_values_temp[v];
		var x = Object.keys(this.supplements_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.supplements_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.supplements = final;
		console.log("Request Object");
		console.log(this.state.requestObject);
		this.setState(state);
	}

	addInjury(v) {
		console.log("Adding " + v);
		this.injuries_values_temp[v.toString()] = v;
		var x = Object.keys(this.injuries_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.injuries_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.injuries= final;
		this.setState = state;
		console.log("Request Object" );
		console.log(this.state.requestObject);
	}

	removeInjury(v) {
		console.log("Adding " + v);
		delete this.injuries_values_temp[v];
		var x = Object.keys(this.injuries_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.injuries_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.injuries= final;
		this.setState = state;
		console.log("Request Object" );
		console.log(this.state.requestObject);

	}
	addAllergy(v) {
		console.log("Adding " + v);
		this.allergies_values_temp[v.toString()] = v;
		var x = Object.keys(this.allergies_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.allergies_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.allergies= final;
		this.setState(state);
		console.log("Request Object" );
		console.log(this.state.requestObject);

	}

	removeAllergy(v) {
		console.log("Adding " + v);
		delete this.allergies_values_temp[v];
		var x = Object.keys(this.allergies_values_temp);
		var i;
		var final = '';
		for(i=0;i<x.length;i++) {
			final = final+','+this.allergies_values_temp[x[i]];
		}
		final = final.replace(/^,*/, '');
		final = final.replace(/,*$/,'');
		var state = this.state;
		state.requestObject.allergies= final;
		this.setState(state);
		console.log("Request Object" );
		console.log(this.state.requestObject);

	}


	handleNext() {

		var current = this.state.current;
		if(current === 1) {
			//this.getdata();
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
					this.getdata();

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


getdata() {
	var baseurl = "http://localhost:8000/gymapp2/";
	var foods = baseurl + "allfoods/";
	var exercises= baseurl + "allexercises/";
	var supplements = baseurl + "allsupplements/";
	var muscles = baseurl + "allmuscles/";
	axios.get(foods)
	.then(function(response){
		this.allfoods = response.data;
		console.log("allfoods global");
		console.log(this.allfoods);
		this.fprops = {
						values: this.allfoods.slice(),
						current : 1,
						addFood : this.addFood,
						removeFood : this.removeFood
					};
	}.bind(this))
	.catch(function(error){
		console.log('error');
	});

	axios.get(exercises)
	.then(function(response){
		this.allexercises = response.data;
		this.eprops = {
			values:this.allexercises.slice(),
			current:2,
			addExercise : this.addExercise,
			removeExercise : this.removeExercise
			};
		console.log(this.allexercises);
	}.bind(this))
	.catch(function(error){
		console.log('error');
	});

	axios.get(supplements)
	.then(function(response){
		this.allsupplements = response.data;
		this.sprops = {
		values:this.allfoods.slice(),
		current:3,
		addSupplement : this.addSupplement,
		removeSupplement : this.removeSupplement
		}
		console.log(this.allsupplements);
	}.bind(this))
	.catch(function(error){
		console.log('error');
	});

	axios.get(muscles)
	.then(function(response){
		this.allmuscles= response.data;
	}.bind(this))
	.catch(function(error){
		console.log('error');
	});
}


handleFinalSubmit() {
	var baseurl = 'http://localhost:8000/gymapp2/signup/';
	axios.post(baseurl, this.state.requestObject)
	.then(function(response) {
		console.log(response);
	})
	.catch(function(error) {
		console.log(error);
	});
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
		<button onClick={this.props.logout}>Back</button>
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
	if(this.state.current === 3) {
		return (
			<div>
			<p>
			<h1>Form Plans</h1>
			</p>
			<div>
			<h1>Select Food</h1>
			<CheckBoxes current = {1} values = {this.allfoods.slice()} addFood = {this.addFood} removeFood = {this.removeFood} />
			</div>
			<div>
			<h1>Select Exercises</h1>
			<CheckBoxes current = {2} values = {this.allexercises.slice()} addExercise = {this.addExercise} removeExercise = {this.removeExercise} />
			</div>
			<h1>Select Supplements</h1>
			<div>
			<CheckBoxes current = {3} values = {this.allsupplements.slice()} addSupplement = {this.addSupplement} removeSupplement= {this.removeSupplement} />
			</div>
			<button onClick={this.handleBack}>Back</button>
			<p>
			<button onClick={this.handleNext}>Next</button>
			</p>
			</div>
		)
	}
	if(this.state.current === 4) {
		return (
			<div>
			<p>
			<h1>Injuries and Allergies</h1>
			</p>
			<div>
			<h1>Select Allergies</h1>
			<CheckBoxes current = {4} values = {this.allfoods.slice()} addAllergy = {this.addAllergy} removeAllergy = {this.removeAllergy} />
			</div>
			<div>
			<h1>Select Injuries</h1>
			<CheckBoxes current = {5} values = {this.allmuscles.slice()} addInjury = {this.addInjury} removeInjury = {this.removeInjury} />
			</div>
			<button onClick={this.handleBack}>Back</button>
			<p>
			<button onClick={this.handleNext}>Next</button>
			</p>
			</div>
		)
	}
	if(this.state.current === 5)
	return (
		<div>
		<p>
		<h1>Fourth Page.Verify data and submit.</h1>
		</p>
		<div>
		<pre>{JSON.stringify(this.state.requestObject,null,2)}</pre>
		</div>
		<p>
		<button onClick={this.handleBack}>Back</button>
		</p>

		<p>
		<button onClick={this.handleFinalSubmit}>Submit</button>
		</p>
		</div>
	)
}
}


export default Signup;
