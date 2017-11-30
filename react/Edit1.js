import axios from 'axios';
import React from 'react';
import CheckBoxes from './CheckBoxes'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestObject : {
                email:'',
                allergies:'',
                injuries:'',
                foods:'',
                exercises:'',
                supplements:'',
            }
        }

        this.foods = '';
        this.exercises = '';
        this.supplements= '';
        this.injuries= '';
        this.allergies= '';

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

        this.handleUpdate = this.handleUpdate.bind(this);

        this.food_values_temp = {};
        this.exercises_values_temp = {};
        this.supplements_values_temp = {};
        this.injuries_values_temp= {};
        this.allergies_values_temp= {};
    }

    handleUpdate() {
        console.log(this.foods);
        console.log(this.exercises);
        console.log(this.supplements);
        console.log(this.injuries);
        console.log(this.allergies);
        var axiosInstance = axios.create({
            headers:{Authorization:'Token ' + localStorage.getItem('token')}
        });

        var baseurl = 'http://localhost:8000/gymapp2/';
        var url = baseurl + 'update/'

        axiosInstance.post(url, {
            foods : this.foods,
            exercises : this.exercises,
            supplements : this.supplements,
            injuries : this.injuries,
            allergies : this.allergies
        })
        .then(function(response) {
            console.log('Update successful');

        })
        .catch(function(error) {
            console.log(error);
        })
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

        this.foods = final;
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
        this.exercises = final;
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
        this.supplements = final;

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
        this.foods = final;
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
        this.exercises = final;

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
        this.supplements = final;

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
        this.injuries = final;

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
        this.injuries = final;


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
        this.allergies= final;


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

        this.allergies = final;

    }


    render() {
        console.log(this.props);
        return(
            <div>
                <center>
            <h1>EDIT INFORMATION</h1>
            </center> 
			<div>
			<div class="row">
      			<div class="col s0 m2">
      			  <div class="card-panel gray">
					<center>
					<h4>Select Injuries</h4>
					</center>
					<CheckBoxes injuries={this.props.injuries.slice()}  allmuscles={this.props.allmuscles.slice()} current={6} add = {this.addInjury} remove={this.removeInjury}/>
        		</div>
      		</div>
                
              <div class="col s0 m2">
      			  <div class="card-panel gray">
					<center>
					<h4>Select Allergies</h4>
					</center>
                    <CheckBoxes allergies={this.props.allergies.slice()}  allfoods={this.props.allfoods.slice()} current={7} add = {this.addAllergy} remove={this.removeAllergy}/>
        		</div>
      		</div>

              <div class="col s0 m2">
      			  <div class="card-panel gray">
					<center>
					<h4>Select Workout Plan</h4>
					</center>
                    <CheckBoxes workoutplan={this.props.workoutplan.slice()}  allexercises={this.props.allexercises.slice()} current={8} add = {this.addExercise} remove={this.removeExercise}/>
        		</div>
      		</div>

              <div class="col s0 m2">
      			  <div class="card-panel gray">
					<center>
					<h4>Select Diet Plan</h4>
					</center>
                    <CheckBoxes dietplan={this.props.dietplan.slice()}  allfoods={this.props.allfoods.slice()} current={9} add = {this.addFood} remove={this.removeFood}/>
        		</div>
      		</div>

      			<div class="col s4 m2">
      			  <div class="card-panel gray">
					<center>
					<h4>Select Supplement Plan</h4>
					</center>
                    <CheckBoxes supplementplan={this.props.supplementplan.slice()}  allsupplements={this.props.allsupplements.slice()} current={10} add = {this.addSupplement} remove={this.removeSupplement}/>
        		</div>
      		</div>
			</div>
			</div>

            <div>
                <center>
            <button className="waves-effect waves-light btn" name="update" onClick={this.handleUpdate}>Update</button>
            </center>
            </div>

            </div>
        )
    }
}

export default Edit;
