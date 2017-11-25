import React, {Component} from 'react';
import Signup from './signuptest';
import Login from './Login';
import Home from './Home';

/*
login -> 1
homepage -> 2
signup -> 3
*/

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
            current : 1,
        }
        this.handleClick = this.handleClick.bind(this);
        this.changeCurrent = this.changeCurrent.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
        this.logout = this.logout.bind(this);
    }

    loginSuccess() {
        var state = this.state;
        state.isLoggedIn = true;
        state.current = 2;
        this.setState(state);
    }

    logout() {
        var state = this.state;
        localStorage.removeItem('token');
        state.isLoggedIn = false;
        state.current = 1;
        this.setState(state);
    }

    handleClick() {
        return;
    }

    changeCurrent(i) {
        var state = this.state;
        state.current = i;
        this.setState(state);
    }

    render() {
        var state = this.state;
        if(this.state.current === 1 || this.state.isLoggedIn === false)
            return(<Login  loginSuccess = {this.loginSuccess} />);

        if(this.state.current === 2 && this.state.isLoggedIn === true)
            return(<Home logout = {this.logout}/>);
        else {
            state.current = 1;
            state.isLoggedIn = false;
            this.setState(state);
        }

        if(this.state.current === 3)
            return(<Signup />);
    }
}

export default App;
