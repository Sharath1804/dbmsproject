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
        this.doesInjuryExist = this.doesInjuryExist.bind(this);
        this.doesAllergyExist = this.doesAllergyExist.bind(this);
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
        if(this.props.current === 4) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.addAllergy(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.removeAllergy(e.target.name);
            }
        }
        if(this.props.current === 5) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.addInjury(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.removeInjury(e.target.name);
            }
        }
        ///////////////////////////////////////////////////////////////////////////

        if(this.props.current === 6) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.add(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.remove(e.target.name);
            }
        }
        if(this.props.current === 7) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.add(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.remove(e.target.name);
            }
        }
        if(this.props.current === 8) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.add(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.remove(e.target.name);
            }
        }
        if(this.props.current === 9) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.add(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.remove(e.target.name);
            }
        }
        if(this.props.current === 10) {
            if(e.target.checked == true) {
                console.log("checked " + e.target.name);
                this.props.add(e.target.name);
            }
            if(e.target.checked == false) {
                console.log("unchecked " + e.target.name);
                this.props.remove(e.target.name);
            }
        }

    }

    doesInjuryExist() {
        //check if the injury exists in all injuries
        return "true";
    }

    doesAllergyExist() {
        return "true";
    }


    MakeCheckboxes() {
        var c;
        console.log(this.props);
        /*
        var v = this.props.values.slice();
        console.log("Assigning values");
        console.log(v);
        */

        if(this.props.current ===1){
                c=this.props.values.map(
                (x) => <li>
                NAME:{x.name} TYPE:{x.food_type}
                <input type='checkbox' name={x.name} onChange={this.handleCheckbox} />
                </li>
            );
        }
        //Exercises
        if(this.props.current ===2){
                c=this.props.values.map(
                (x) => <li>
                NAME:{x.exercise_name}, EQUIPMENT:{x.equipment}
                <input type='checkbox' name={x.exercise_name} onChange={this.handleCheckbox} />
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
        if(this.props.current ===4){
                c=this.props.values.map(
                (x) => <li>
                NAME:{x.name}
                <input type='checkbox' name={x.name} onChange={this.handleCheckbox} />
                </li>
            );
        }
        if(this.props.current ===5){
                c=this.props.values.map(
                (x) => <li>
                NAME:{x.name}
                <input type='checkbox' name={x.name} onChange={this.handleCheckbox} />
                </li>
            );
        }

        if(this.props.current===6) {
            console.log("injuries",this.props.injuries);
            console.log("allmuscles",this.props.allmuscles);
            var injurynames = this.props.injuries.slice().map((x) => x.muscle.name);
            var checkedStatus = false;
            console.log("injurynames ", injurynames);
            var isChecked = function(x) {
                if(injurynames.indexOf(x) > -1) {
                    this.props.add(x)
                    checkedStatus=true;
                }
                else
                    checkedStatus=false;
            }.bind(this);
            c=this.props.allmuscles.map(
            (x) => <li>
            {isChecked(x.name)}
            NAME:{x.name}
            <input type='checkbox'  name={x.name} onChange={this.handleCheckbox} defaultChecked={checkedStatus}/>
                </li>
            );
        }
        if(this.props.current===7) {
            var checkedStatus = false;
            var allergynames = this.props.allergies.slice().map((x) => x.food.name);
            console.log("allergynames",allergynames);

            var isChecked = function(x) {

                if(allergynames.indexOf(x) > -1) {
                    this.props.add(x)
                    checkedStatus=true;
                }
                else
                    checkedStatus=false;
            }.bind(this);
            c=this.props.allfoods.map(
            (x) => <li>
            {isChecked(x.name)}
            NAME:{x.name}
            <input type='checkbox' name={x.name} onChange={this.handleCheckbox} defaultChecked={checkedStatus} />
            </li>
        );
        }

        //WORKOUTPLAN
        if(this.props.current===8) {
            var checkedStatus = false;
            var workoutplanexercises = this.props.workoutplan.slice().map((x) => x.exercise.exercise_name);
            console.log("workoutplan",workoutplanexercises);
            var isChecked = function(x) {

                if(workoutplanexercises.indexOf(x) > -1) {
                    this.props.add(x)
                    checkedStatus=true;
                }
                else
                    checkedStatus=false;
            }.bind(this);
            c=this.props.allexercises.map(
            (x) => <li>
            {isChecked(x.exercise_name)}
            NAME:{x.exercise_name}
            <input type='checkbox' name={x.exercise_name} onChange={this.handleCheckbox} defaultChecked={checkedStatus} />
            </li>
        );
        }

        //DIETPLAN
        if(this.props.current===9) {
            var checkedStatus = false;
            var dietplanfoods = this.props.dietplan.slice().map((x) => x.food.name);
            console.log(dietplanfoods);

            var isChecked = function(x) {

                if(dietplanfoods.indexOf(x) > -1) {
                    this.props.add(x)
                    checkedStatus=true;
                }
                else
                    checkedStatus=false;
            }.bind(this);
            c=this.props.allfoods.map(
            (x) => <li>
            {isChecked(x.name)}
            NAME:{x.name}
            <input type='checkbox' name={x.name} onChange={this.handleCheckbox} defaultChecked={checkedStatus} />
            </li>
        );
        }

        //SUPPLEMENTPLAN
        if(this.props.current===10) {
            var checkedStatus = false;
            var supplementnames = this.props.supplementplan.slice().map((x) => x.supplement.name);
            console.log(supplementnames);

            var isChecked = function(x) {

                if(supplementnames.indexOf(x) > -1) {
                    this.props.add(x)
                    checkedStatus=true;
                }
                else
                    checkedStatus=false;
            }.bind(this);
            c=this.props.allsupplements.map(
            (x) => <li>
            {isChecked(x.name)}
            NAME:{x.name}
            <input type='checkbox' name={x.name} onChange={this.handleCheckbox} defaultChecked={checkedStatus} />
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
