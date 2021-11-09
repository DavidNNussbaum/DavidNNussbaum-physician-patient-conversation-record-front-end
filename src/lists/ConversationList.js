import Conversation from '../components/Conversation';
import CreateConversation from '../components/CreateConversation';

const ConversationList = (props) => {
    return ( 
      <div>
        {props.conversations.length > 0 && <h2>Conversations</h2>}
        {props.conversations.length === 0 && <h2>There are currently no conversations listed for this patient.</h2>}
        {props.conversations.map(conversation => 
          <Conversation key={conversation.id} conversation={conversation} currentUser={props.currentUser}/>
        )}
        {props.currentUser.user && (
          <CreateConversation patientId={props.patientId}/>) }
      </div>
    ) 
  }
  


export default ConversationList;
