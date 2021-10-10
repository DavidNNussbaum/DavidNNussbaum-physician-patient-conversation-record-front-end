import React, { Component } from 'react';
import { connect } from 'react-redux';
import Medication from '../components/Medication';
import ComplicationList from './ComplicationList'

class MedicationList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      medication: null
    }
    
  }
   
  render() {
    const handleChange = (event) => {
      if (event.target.value === "0") {
        this.setState({
          medication: null
        })
      } else {
        const selectedMedication = this.props.medications.find(medication => medication.id === event.target.value)
        this.setState({
          medication: selectedMedication
        })
        this.props.addComplications(selectedMedication.attributes.complications)
      }
    }
    return (
      <>
        <select onChange={handleChange}>
          <option id="select-med-button" value="0">Select A Medication</option>
          {this.props.medications.map(medication => 
            <option key={medication.id} value={medication.id}>{medication.attributes.name_strength}</option>
            )}
        </select>
        {this.state.medication && (
          <>
            < Medication medication={this.state.medication.attributes} />
            <ComplicationList complications={this.props.complications} medicationId={this.state.medication.id} currentUser={this.props.currentUser}/>
          </>
        )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
      currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addComplications: complications => dispatch({type: 'ADD_COMPLICATIONS', 
      complications}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicationList);



 
