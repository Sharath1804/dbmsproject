import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Home from './Home';

/*
login -> 1
homepage -> 2
signup -> 3
*/

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn : false,
            current : 1,
        }
        this.handleClick = this.handleClick.bind(this);
        this.signup = this.signup.bind(this);
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

    signup(i) {
        var state = this.state;
        state.current = 3;
        this.setState(state);
    }

    render() {
        var state = this.state;

        if(this.state.current === 3) {
            return(<Signup  logout = {this.logout}/>);
        }

        if(this.state.current === 1)
            return(<Login  loginSuccess = {this.loginSuccess} signup = {this.signup}/>);


        if(this.state.current === 2 && this.state.isLoggedIn === true)
            return(<Home logout = {this.logout} />);

        else {
            state.current = 1;
            state.isLoggedIn = false;
            this.setState(state);
        }
    }
}

export default App;
