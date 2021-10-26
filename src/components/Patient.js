import React, { Component } from 'react';
 
class Patient extends Component {
  render() {
    return (
      <div>
          <h1>Patient</h1>
          <p>Initials: {this.props.patient.initials}</p>
          <p>Date of Birth: {this.props.patient.dob}</p>
          <hr />
      </div>
    );
  }
};

export default Patient;

 
