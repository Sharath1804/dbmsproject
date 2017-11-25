import React from 'react';

class CheckBoxes extends React.Component {
    constructor(props) {
        super(props);
        console.log("Props from checkboxes");
        console.log(props);
        this.state = {

        }
        this.handleCheckbox = this.handleCheckbox.bind(this);
        this.MakeCheckboxes = this.MakeCheckboxes.bind(this);
        this.props = props;
    }
    handleCheckbox(e) {
        if(this.props.current === 1) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.addFood(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.removeFood(e.target.name);
            }
        }
        if(this.props.current === 2) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.addExercise(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.removeExercise(e.target.name);
            }
        }
        if(this.props.current === 3) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.addSupplement(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.removeSupplement(e.target.name);
            }
        }

    }


    MakeCheckboxes() {
        var c;
        console.log(this.props);
        var v = this.props.values.slice();
        console.log("Assigning values");
        console.log(v);
        if(this.props.current ===1){
                c=v.map(
                (x) => <li>
                NAME:{x.name} TYPE:{x.food_type}
                <input type='checkbox' name={x.name} onChange={this.handleCheckbox} />
                </li>
            );
        }
        //Exercises
        if(this.props.current ===2){
                c=v.map(
                (x) => <li>
                NAME:{x.exercise_name}, EQUIPMENT:{x.equipment}
                <input type='checkbox' name={x.name} onChange={this.handleCheckbox} />
                </li>
            );
        }
        //Workouts
        if(this.props.current ===3){
                c=this.props.values.map(
                (x) => <li>
                NAME:{x.name}, TYPE:{x.type}
                <input type='checkbox' name={x.name} onChange={this.handleCheckbox} />
                </li>
            );
        }
        console.log(c);
        return (
            <ul>{c}</ul>
        )
    };
    render() {
        return (
            <div>
            {this.MakeCheckboxes()}
            </div>
        )
    }
}

export default CheckBoxes;
