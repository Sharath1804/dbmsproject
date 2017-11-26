import React from 'react';
import axios from 'axios';
import Edit from './Edit';

//axios.defaults.headers.common['Authorization'] = 'Token ' + localStorage.getItem('token');

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
        console.log('in getData');
        var baseurl = 'http://localhost:8000/gymapp2/'
        var requestObject = {};
        var axiosInstance = axios.create({
            headers:{Authorization:'Token ' + localStorage.getItem('token')}
        });
        if(this.state.current === 1 && Object.keys(this.info).length === 0) {
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
        if(this.state.current === 2 && Object.keys(this.dietplan).length === 0) {
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
        if(this.state.current === 3 && Object.keys(this.workoutplan).length === 0) {
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
        if(this.state.current === 4 && Object.keys(this.supplementplan).length === 0) {
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
            var props = {
                dietplan : this.dietplan,
                workoutplan : this.workoutplan,
                supplementplan : this.supplementplan,
                info : this.info,
                injuries : this.injuries,
                allergies : this.allergies
            }
            return(
                <Edit props={props} />
            )
        }
    }
}

export default Home;
