import {useState} from "react";
import ConversationForm from '../forms/ConversationForm'


const CreateConversation = (props) => {
    const [showForm, setShowForm] = useState(false)
    const handleClick = () => {
         setShowForm(!showForm)
     }
     return (
        <>
            <button onClick={handleClick}>Add A New Conversation</button>
            {showForm && <ConversationForm setShowForm={setShowForm} patientId={props.patientId}/>}
       </>
     )
}

export default CreateConversation;