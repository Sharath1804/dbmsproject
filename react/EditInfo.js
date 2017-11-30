import axios from 'axios';
import React from 'react';

class EditInfo extends React.Component {
    constructor(prop) {
        super(props);
        this.state = {
            requestObject : {
				username:'',
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
			},
        }
        this.foods = {

        }
        this.supplements = {

        }
        this.exercises = {

        }
        this.injuries = {

        }
        this.workouts = {

        }
        this.getData = this.getData.bind(this);
    }

    getData() {

        var baseurl = "http://localhost:8000/gymapp2/";
        var foods = baseurl + "dietplan/";
        var exercises= baseurl + "workoutplan/";
        var supplements = baseurl + "supplementplan/";
        var injuries = baseurl + "injuries/"
        var allergies = baseurl + "allergies/"

        var axios = axios.create({
            headers:{Authorization:'Token ' + localStorage.getItem('token')}
        });

        axios.post(foods, {})
        .then(function(response){
            this.foods = response.data;
            console.log(this.allfoods);
        }.bind(this))
        .catch(function(error){
            console.log('error');
        });

        axios.post(exercises, {})
        .then(function(response){
            this.exercises = response.data;
            console.log(this.allfoods);
        }.bind(this))
        .catch(function(error){
            console.log('error');
        });
        axios.post(supplements, {})
        .then(function(response){
            this.supplements = response.data;
            console.log(this.allfoods);
        }.bind(this))
        .catch(function(error){
            console.log('error');
        });
        axios.post(allergies, {})
        .then(function(response){
            this.allergies = response.data;
            console.log(this.allfoods);
        }.bind(this))
        .catch(function(error){
            console.log('error');
        });
        axios.post(injuries, {})
        .then(function(response){
            this.injuries = response.data;
            console.log(this.allfoods);
        }.bind(this))
        .catch(function(error){
            console.log('error');
        });
}

export default EditInfo;
