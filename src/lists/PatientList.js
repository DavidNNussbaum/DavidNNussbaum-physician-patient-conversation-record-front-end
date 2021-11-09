import React, { Component } from 'react';
import { connect } from 'react-redux';
import Patient from '../components/Patient';
import ConversationList from './ComnversationList'

class PatientList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      patient: null
    }
    
  }
   
  render() {
    const handleChange = (event) => {
      if (event.target.value === "0") {
        this.setState({
          patient: null
        })
      } else {
        const selectedPatient = this.props.patients.find(patient => patient.id === event.target.value)
        this.setState({
          patient: selectedPatient
        })
        this.props.addConversations(selectedPatient.attributes.conversations)
      }
    }
    return (
      <>
        <select onChange={handleChange}>
          <option id="select-patient-button" value="0">Select A Patient</option>
          {this.props.patients.map(patient => 
            <option key={patient.id} value={patient.id}>{patient.attributes.initials}</option>
            )}
        </select>
        {this.state.patient && (
          <>
            < Patient patient={this.state.patient.attributes} />
            <ConversationList conversations={this.props.conversations} patientId={this.state.patient.id} currentUser={this.props.currentUser}/>
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
      addConversations: conversations => dispatch({type: 'ADD_CONVERSATIONS', 
      conversations}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PatientList);



 
