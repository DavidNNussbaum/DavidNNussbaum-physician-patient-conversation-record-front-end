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
        <p>Description: {props.complication.complication_description}</p>
        <p>Severity (1-10): {props.complication.complication_severity}</p>
        <p>Duration: {props.complication.complication_duration}</p>
        <p>{props.complication.completely_resolved ? "Completely Resolved." : "Not Completely Resolved."}</p>
        { (props.currentUser.user && props.currentUser.user.user.data.attributes.id === props.complication.user_id) && (
          <>
          <button onClick={handleEdit}>Edit This Complication</button>
          {showForm && <EditComplicationForm complication={props.complication} setShowForm={setShowForm} currentUser={props.currentUser}/>}
          <button onClick={handleClick} >Delete This Complication</button>
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
      deleteComplication: (complicationId, token) => dispatch(deleteAComplication(complicationId, token)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Complication);


 