import React, { Component } from "react"
import { connect } from 'react-redux';
import { createAPatient } from '../actions/patientActions';
;
class PatientForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initials: "", 
            dob: "",
            errors: "",
        };
      }
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
             
        });
      };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addNewPatient(this.state)
        .then(() => this.props.setShowForm(false))
        .catch((errors) => this.setState({ errors: errors }));
           
    }
render() {
   return (
       <form onSubmit={this.handleSubmit}>
           {this.state.errors && <p>{this.state.errors}</p>}
           <label for="initials">Initials: </label>
           <input onChange={this.handleChange} name="initials" id="initials" type="text"/>
           <label for="dob">Date of Birth(dd/mm/yyyy): </label>
           <input onChange={this.handleChange} name="dob" id="dob" type="text"/>
           <input type="submit" value="Submit"/>
       </form>
   )
}
}

  const mapDispatchToProps = (dispatch) => {
      return {
         addNewPatient: patient => dispatch(createAPatient(patient)),
      }
  }

export default connect(null, mapDispatchToProps)(PatientForm);

 