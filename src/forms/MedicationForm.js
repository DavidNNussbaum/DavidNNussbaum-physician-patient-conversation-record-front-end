import React, { Component } from "react"
import { connect } from 'react-redux';
import { createAMedication } from '../actions/medActions';
;
class MedicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name_strength: "", 
            frequency: "",
            administration_route: "",
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
        this.props.addNewMedication(this.state)
        .then(() => this.props.setShowForm(false))
        .catch((errors) => this.setState({ errors: errors }));
           
    }
render() {
   return (
       <form onSubmit={this.handleSubmit}>
           {this.state.errors && <p>{this.state.errors}</p>}
           <label for="name_strength">Name/Strength: </label>
           <input onChange={this.handleChange} name="name_strength" id="name-strength" type="text"/>
           <label for="frequency">Frequency: </label>
           <input onChange={this.handleChange} name="frequency" id="frequency" type="text"/>
           <label for="administration_route">Administration Route: </label>
           <input onChange={this.handleChange} name="administration_route" id="administration-route" type="text"/>
           <input type="submit" value="Submit"/>
       </form>
   )
}
}

  const mapDispatchToProps = (dispatch) => {
      return {
         addNewMedication: medication => dispatch(createAMedication(medication)),
      }
  }

export default connect(null, mapDispatchToProps)(MedicationForm);

 