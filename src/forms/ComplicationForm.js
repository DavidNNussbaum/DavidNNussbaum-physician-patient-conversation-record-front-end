import React, { Component }  from "react"
import { connect } from 'react-redux';
import { createAComplication } from '../actions/medActions';

class ComplicationForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                complication_severity: "", 
                medication_id: props.medicationId,
                complication_duration: "",
                complication_description: "",
                completely_resolved: "",
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
            this.props.createAComplication(this.state, this.props.currentUser.user.token)
            .then(() => this.props.setShowForm(false))
            .catch((errors) => this.setState({ errors: errors }));
             
    } 
    render() {
   return (
       <form onSubmit={this.handleSubmit}>
           {this.state.errors && <p>{this.state.errors}</p>}
           <label htmlFor="complication_description">Description: </label>
           <input onChange={this.handleChange} name="complication_description" id="complication-description"    type="text"/>
           <label htmlFor="complication_severity">Severity (1-10): </label>
           <input onChange={this.handleChange} name="complication_severity" id="complication-severity" type="number"/>
           <label htmlFor="complication_duration">Duration: </label>
           <input onChange={this.handleChange} name="complication_duration" id="complication-duration" type="text"/>
           <input type="radio" onChange={this.handleChange} name="completely_resolved" value="true"/>
           <label htmlFor="true">Completely Resolved</label>
           <input type="radio" onChange={this.handleChange} name="completely_resolved" value="false"/>
           <label htmlFor="false">Not Completely Resolved</label>
           <input type="submit" value="Submit"/>
       </form>
   )
}}

const mapStateToProps = state => {
    return {
        currentUser: state.user
    }
  }

  const mapDispatchToProps = (dispatch) => {
      return {
        createAComplication: (complication, token) => dispatch(createAComplication(complication, token)),
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ComplicationForm);

