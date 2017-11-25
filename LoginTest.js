import React from 'react';
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');

class Home extends React.Component {
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
    }

    render() {
        return (
            <div>
            <h1>HOME PAGE</h1>
            {this.buttons()}
            {this.divComponent()}
            </div>
        )
    }

    buttons() {
        return(
            <div>
            <button name="info"  onClick={this.handleClick}>INFORMATION</button>
            <button name="dietplans" onClick={this.handleClick}>DIET PLAN</button>
            <button name="workoutplans" onClick={this.handleClick}>WORKOUT PLAN</button>
            <button name="supplementplans" onClick={this.handleClick}>SUPPLEMENT PLAN</button>
            <button name="edit" onClick={this.handleClick}>EDIT INFO</button>
            <button name="logout" onClick={this.handleClick}>LOGOUT</button>
            </div>
        )
    }

    getData() {
        var baseurl = 'http://localhost:8000/gymapp2/'
        var requestObject = {Authorization: 'Token ' + localStorage.getItem('token')};
        var url = '';
            //getinfo
        url = baseurl + 'info/';
        console.log(url);
        console.log(requestObject);

        axios.post(url, requestObject )
        .then(function(response) {
            console.log(response);
            var state = this.state;
            this.info = response.data;
            console.log(response.data);
        }.bind(this))
        .catch(function(error){
            console.log(error);
        })

        //getdiet
        url = baseurl + 'dietplan/';
        console.log(url);
        console.log(requestObject);

        axios.post(url, requestObject )
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

        //getworkouts
        url = baseurl + 'workoutplan/';
        console.log(url);
        console.log(requestObject);

        axios.post(url, requestObject )
        .then(function(response) {
            console.log(response.data);
            this.workoutplan = response.data;
        }.bind(this))
        .catch(function(error){
            console.log(error);
        })
        //getsupplements
        url = baseurl + 'supplementplan/';
        console.log(url);
        console.log(requestObject);

        axios.post(url, requestObject )
        .then(function(response) {
            console.log(response.data);
            this.supplementplan = response.data;
        }.bind(this))
        .catch(function(error){
            console.log(error);
        })
    }

    divComponent() {
        if(this.state.current === 1)
            return(
                <div>
                {this.state.current}
                {this.getData()}
                </div>
            )
        if(this.state.current === 2)
            return(
                <div>
                {this.state.current}
                {this.getData()}
                </div>
            )
        if(this.state.current === 3)
            return(
                <div>
                {this.state.current}
                {this.getData()}
                </div>
            )
        if(this.state.current === 4)
            return(
                <div>
                {this.state.current}
                {this.getData()}
                </div>
            )
    }
}

export default Home;
