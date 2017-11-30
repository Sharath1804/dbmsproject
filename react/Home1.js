import React from 'react';
import axios from 'axios';
import Edit from './Edit';

//axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');

class Home1 extends React.Component {
    /*
    1 -> info
    2 -> diet
    3 -> workout
    4 -> supplements
    */
    constructor(props) {
        super(props);
        this.state = {
            current : 1,
            dietplan : {

            },
        }
        this.dietplan = {

        }
        this.workoutplan = {

        }
        this.supplementplan = {

        }
        this.info = {

        }

        this.injuries = {

        }

        this.allergies = {

        }

        this.allmuscles = {

        }

        this.allfoods = {

        }

        this.allexercises = {

        }

        this.allsupplements = {

        }

        this.buttons = this.buttons.bind(this);
        this.divComponent = this.divComponent.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    handleClick(e) {
        var target = e.target;
        var name = target.name;
        var state = this.state;
        if(name === 'info') {
            state.current = 1;
            this.setState(state);
        }
        if(name === 'dietplans') {
            state.current = 2;
            this.setState(state);
        }
        if(name === 'workoutplans') {
            state.current = 3;
            this.setState(state);
        }
        if(name === 'supplementplans') {
            state.current = 4;
            this.setState(state);
        }
        if(name === 'logout') {
            this.props.logout();
        }
        if(name === 'edit') {
            state.current = 5;
            this.setState(state);
        }
        if(name === 'alandin') {
            console.log("alandin");
            state.current = 6;
            this.setState(state);
        }
    }

    render() {
        return (
            <div>
                <center>
            <h1>HOME PAGE</h1>
                </center>
            {this.buttons()}
            {this.divComponent()}
            </div>
        )
    }

    buttons() {
        return(
            <div>
                <center>
            <button  className = "waves-effect waves-light btn" name="info"  onClick={this.handleClick}>INFORMATION</button>
            <button className = "waves-effect waves-light btn" name="dietplans" onClick={this.handleClick}>DIET PLAN</button>
            <button className = "waves-effect waves-light btn" name="workoutplans" onClick={this.handleClick}>WORKOUT PLAN</button>
            <button className = "waves-effect waves-light btn" name="supplementplans" onClick={this.handleClick}>SUPPLEMENT PLAN</button>
            <button className = "waves-effect waves-light btn" name="alandin" onClick={this.handleClick}> ALLERGIES AND INJURIES </button>
            <button className = "waves-effect waves-light btn" name="edit" onClick={this.handleClick}>EDIT INFO</button>
            <button className = "waves-effect waves-light btn" name="logout" onClick={this.handleClick}>LOGOUT</button>
            </center>
            </div>
        )
    }

    getData() {
        console.log('in getData');
        var baseurl = 'http://localhost:8000/gymapp2/'
        var requestObject = {};

        var axiosInstance = axios.create({
            headers:{Authorization:'Token ' + localStorage.getItem('token')}
        });

        if(Object.keys(this.info).length === 0) {
            //getinfo
            var url = baseurl + 'info/';
            console.log(url);
            console.log(requestObject);
            var axiosInstance = axios.create({
                headers:{Authorization:'Token ' + localStorage.getItem('token')}
            });
            axiosInstance.post(url, {} )
            .then(function(response) {
                console.log(response);
                var state = this.state;
                this.info = response.data;
                console.log(response.data);
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }
        if(Object.keys(this.dietplan).length === 0 || this.state.current === 2) {
            //getdiet
            var url = baseurl + 'dietplan/';
            console.log(url);
            console.log(requestObject);

            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log(response);
                var state = this.state;
                this.dietplan = response.data;
                console.log(response.data);
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
            console.log('after axios');
        }
        if(Object.keys(this.workoutplan).length === 0 || this.state.current === 3) {
            //getworkouts
            var url = baseurl + 'workoutplan/';
            console.log(url);
            console.log(requestObject);

            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log(response.data);
                this.workoutplan = response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }
        if(Object.keys(this.supplementplan).length === 0 || this.state.current === 4) {
            //getsupplements
            var url = baseurl + 'supplementplan/';
            console.log(url);
            console.log(requestObject);

            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log(response.data);
                this.supplementplan = response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }
        if(this.state.current === 6) {
            url = baseurl + 'injuries/';
            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log("ALANDIN" , response.data);
                this.injuries = response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }
        if(this.state.current === 6) {
            url = baseurl + 'allergies/';
            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log("ALANDIN",response.data);
                this.allergies = response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }
        if(Object.keys(this.allmuscles).length === 0) {
            url = baseurl + 'allmuscles/';
            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log(response.data);
                this.allmuscles = response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }

        if(Object.keys(this.allfoods).length === 0) {
            url = baseurl + 'allfoods/';
            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log(response.data);
                this.allfoods = response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }
        if(Object.keys(this.allexercises).length === 0) {
            url = baseurl + 'allexercises/';
            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log(response.data);
                this.allexercises = response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }
        if(Object.keys(this.allsupplements).length === 0) {
            url = baseurl + 'allsupplements/';
            axiosInstance.post(url, requestObject )
            .then(function(response) {
                console.log(response.data);
                this.allsupplements= response.data;
            }.bind(this))
            .catch(function(error){
                console.log(error);
            })
        }


    }

    divComponent() {
        if(this.state.current === 1) {
            this.getData();
            window.setTimeout(1000);
            return(
                <div>
                {this.state.current}
                <pre>{JSON.stringify(this.info, null , 5)}</pre>
                </div>
            )
        }
        if(this.state.current === 2) {
            this.getData();
            return(
                <div>
                {this.state.current}
                <pre>{JSON.stringify(this.dietplan, null, 5)}</pre>
                </div>
            )
        }
        if(this.state.current === 3) {
            this.getData();
            return(
                <div>
                {this.state.current}
                <pre>{JSON.stringify(this.workoutplan, null, 5)}</pre>
                </div>
            )
        }
        if(this.state.current === 4) {
            this.getData()
            return(
                <div>
                {this.state.current}
                <pre>{JSON.stringify(this.supplementplan, null, 5)}</pre>
                </div>
            )
        }
        if(this.state.current === 5) {
            return(
                <Edit
                allexercises = {this.allexercises.slice()}
                allsupplements = {this.allsupplements.slice()}
                allfoods = {this.allfoods.slice()}
                allmuscles = {this.allmuscles.slice()}
                dietplan = {this.dietplan}
                supplementplan = {this.supplementplan}
                workoutplan = {this.workoutplan}
                injuries = {this.injuries.slice()}
                allergies = {this.allergies.slice()}
                />
            )
        }

        if(this.state.current===6) {
            this.getData();
            return(

            <div>
            <pre>{JSON.stringify(this.allergies, null, 5)}</pre>
            <pre>{JSON.stringify(this.injuries, null, 5)}</pre>
            </div>
        );
        }
    }
}

export default Home1;
