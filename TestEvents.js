import React from 'react';

class TestEvents extends React.Component{
    constructor() {
        super();
        this.state = {
            count:0
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(e) {
        var updatedCount = this.state.count + 1;
        this.setState({
            count : updatedCount
        })
        console.log("Changed " + this.state.count + " times");
    }

    render() {
        return (
            <div id="maindiv">
            <p>
            <input type="text" onBlur={this.handleInputChange} />
            </p>
            </div>
        )
    }
}

export default TestEvents;
