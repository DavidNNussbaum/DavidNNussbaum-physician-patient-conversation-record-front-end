import {useState} from 'react'
import { connect } from 'react-redux';
import { deleteAConversation } from '../actions/patientActions';
import EditConversationForm from '../forms/EditConversationForm'

const Conversation = (props) => {
  const handleClick = () => {
    props.deleteConversation(props.conversation.id, props.currentUser.user.token) 
}
  const [showForm, setShowForm] = useState(false)
  const handleEdit = () => {
       setShowForm(!showForm)
   }
    return (
      <div key={props.conversation.id}>
        <p>Current Date and Time: {props.conversation.date_time}</p>
        <p>Conversation Details: {props.conversation.details}</p>
        <p>{props.conversation.issue_resolved ? "Issue Resolved." : "Issue Not Resolved."}</p>
        { (props.currentUser.user && props.currentUser.user.user.data.attributes.id === props.conversation.user_id) && (
          <>
          <button onClick={handleEdit}>Edit This Conversation</button>
          {showForm && <EditConversationForm conversation={props.conversation} setShowForm={setShowForm} currentUser={props.currentUser}/>}
          <button onClick={handleClick} >Delete This Conversation</button>
          </>
        )}
        <hr />
      </div>
    )
}

const mapStateToProps = state => {
  return {
      currentUser: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      deleteConversation: (conversationId, token) => dispatch(deleteAConversation(conversationId, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Conversation);

 
 