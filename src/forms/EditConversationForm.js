import React, { Component} from "react"
import { connect } from 'react-redux';
import { editConversation } from '../actions/patientActions';

class EditConversationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date_time: this.props.conversationn.date_time,
            details: this.props.conversation.details,
            issue_resolved: this.props.conversation.issue_resolved,
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
        this.props.updateConversation(this.state, this.props.conversation.id, this.props.currentUser.user.token)
        .then(() => this.props.setShowForm(false))
        .catch((errors) => this.setState({ errors: errors }));
        
    }
   render() {
   return (
       <form onSubmit={this.handleSubmit}>
           {this.state.errors && <p>{this.state.errors}</p>}
           <label htmlFor="date_time">Date and Time: </label>
           <input name="date_time" id="date_time" type="string" onChange={this.handleChange} value={this.state.date_time} />
           <label htmlFor="details">Details: </label>
           <input name="details" id="details" type="text" onChange={this.handleChange} value={this.state.details}/>
           <input type="radio" onChange={this.handleChange} name="issue_resolved" value="true" defaultChecked={this.state.issue_resolved === true}/>
           <label htmlFor="true">The Issue Is Resolved:</label>
           <input type="radio" onChange={this.handleChange} name="issue_resolved" value="false" defaultChecked={this.state.issue_resolved === false}/>
           <label htmlFor="false">The Issue Is Not Resolved:</label>
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
        updateConversation: (conversation, conversationId, token) => dispatch(editConversation(conversation, conversationId, token)),
      }
  }

export default connect(mapStateToProps, mapDispatchToProps)(EditConversationForm);



 


      

 