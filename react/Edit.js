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
            <h3>Select Injuries</h3>

            <div>
            <CheckBoxes allergies={this.props.allergies.slice()}  allfoods={this.props.allfoods.slice()} current={7} />
            </div>
            <h3>Select Workout Plan</h3>

            <div>
            <CheckBoxes workoutplan={this.props.workoutplan.slice()}  allexercises={this.props.allexercises.slice()} current={8} />
            </div>
            <h3>Select Diet Plan</h3>

            <div>
            <CheckBoxes dietplan={this.props.dietplan.slice()}  allfoods={this.props.allfoods.slice()} current={9} />
            </div>
            <h3>Select Supplement Plan</h3>

            <div>
            <CheckBoxes supplementplan={this.props.supplementplan.slice()}  allsupplements={this.props.allsupplements.slice()} current={10} />
            </div>

            </div>
        )
    }
}

export default Edit;
