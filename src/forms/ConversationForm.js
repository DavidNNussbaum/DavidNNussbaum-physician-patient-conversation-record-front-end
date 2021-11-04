import React, { Component }  from "react"
import { connect } from 'react-redux';
import { createAConversation } from '../actions/patientActions';

class ConversationForm extends Component {
        constructor(props) {
            super(props);
            this.state = {
                date_time: "", 
                patient_id: props.patientId,
                details: "",
                issue_resolved: "",
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
            this.props.createAConversation(this.state, this.props.currentUser.user.token)
            .then(() => this.props.setShowForm(false))
            .catch((errors) => this.setState({ errors: errors }));
             
    } 
    render() {
   return (
       <form onSubmit={this.handleSubmit}>
           {this.state.errors && <p>{this.state.errors}</p>}
           <label htmlFor="date_time">Date and Time: </label>
           <input onChange={this.handleChange} name="date_time" id="date_time"    type="string"/>
           <label htmlFor="details">Details: </label>
           <input onChange={this.handleChange} name="details" id="details" type="text"/>
           <input type="radio" onChange={this.handleChange} name="issue_resolved" value="true"/>
           <label htmlFor="true">The Issue Is Resolved:</label>
           <input type="radio" onChange={this.handleChange} name="issue_resolved" value="false"/>
           <label htmlFor="false">The Issue Is Not Resolved:</label>
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
        createAConversation: (conversation, token) => dispatch(createAConversation(conversation, token)),
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ConversationForm);

