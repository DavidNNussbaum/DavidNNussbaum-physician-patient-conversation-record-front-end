const conversationsReducer = (state = { conversations: [], loading: false }, action) => {
    switch(action.type) {
      case 'CREATE_CONVERSATION':
        return {
          ...state,
          conversations: [...state.conversations, action.conversation],
          loading: false
        }
        case 'DELETE_CONVERSATION':
          const conversations = state.conversations.filter(conversation => conversation.id !== action.conversationId)
          return {
            conversations: conversations,
            loading: false
          }
          case 'ADD_CONVERSATIONS':
            return {
              ...state,
              conversations: action.conversations,
              loading: false
            }
          case 'UPDATE_CONVERSATION':
            const index = state.conversations.findIndex(conversation => conversationn.id === action.conversation.id)
          return {
            ...state,
            conversations: [...state.conversations.slice(0, index), action.conversation, ...state.conversations.slice(index + 1)],
            loading: false
          }
       
        
      default:
        return state;
    }
  }
  
  export default conversationsReducer;
