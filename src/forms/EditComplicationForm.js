import React, { Component} from "react"
import { connect } from 'react-redux';
import { editComplication } from '../actions/medActions';

class EditComplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            complication_severity: this.props.complication.complication_severity,
            complication_duration: this.props.complication.complication_duration,
            complication_description: this.props.complication.complication_description,
            completely_resolved: this.props.complication.completely_resolved,
            errors: '',
        };
      }
      handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
      };

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.updateComplication(this.state, this.props.complication.id, this.props.currentUser.user.token)
        .then(() => this.props.setShowForm(false))
        .catch((errors) => this.setState({ errors: errors }));
        
    }
   render() {
   return (
       <form onSubmit={this.handleSubmit}>
           {this.state.errors && <p>{this.state.errors}</p>}
           <label htmlFor="complication_description">Description: </label>
           <input name="complication_description" id="complication-description"    type="text" onChange={this.handleChange} value={this.state.complication_description} />
           <label htmlFor="complication_severity">Severity (1-10): </label>
           <input name="complication_severity" id="complication-severity" type="number" onChange={this.handleChange} value={this.state.complication_severity}/>
           <label htmlFor="complication_duration">Duration: </label>
           <input name="complication_duration" id="complication-duration" type="text" onChange={this.handleChange} value={this.state.complication_duration}/>
           <input type="radio" onChange={this.handleChange} name="completely_resolved" value="true" defaultChecked={this.state.completely_resolved} />
           <label htmlFor="true">Completely Resolved</label>
           <input type="radio" onChange={this.handleChange} name="completely_resolved" value="false" defaultChecked={this.state.completely_resolved === false}/>
           <label htmlFor="false">Not Completely Resolved</label>
           <input type="submit" value="Submit"/>
       </form>
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
        updateComplication: (complication, complicationId, token) => dispatch(editComplication(complication, complicationId, token)),
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditComplicationForm);



 


      

 