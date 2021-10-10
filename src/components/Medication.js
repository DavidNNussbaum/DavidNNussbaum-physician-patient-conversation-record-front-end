import React, { Component } from 'react';
 
class Medication extends Component {
  render() {
    return (
      <div>
          <h1>Medication</h1>
          <p>Name/Strength: {this.props.medication.name_strength}</p>
          <p>Frequency: {this.props.medication.frequency}</p>
          <p>Administration Route: {this.props.medication.administration_route}</p>
          <hr />
      </div>
    );
  }
};


export default Medication;
