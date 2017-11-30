import React from 'react';
import CheckBoxes from './Checkboxes'

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log(this.props);
        return(
            <div>
            <h1>EDIT INFORMATION</h1>
            <pre>{JSON.stringify(this.props, null, 5)}</pre>
            <h3>Select Injuries</h3>
            <div>
            <CheckBoxes injuries={this.props.injuries.slice()}  allmuscles={this.props.allmuscles.slice()} current={6} />
            </div>

            <div>
            <CheckBoxes allergies={this.props.allergies.slice()}  allfoods={this.props.allfoods.slice()} current={7} />
            </div>
            </div>
        )
    }
}

export default Edit;
