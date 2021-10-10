const complicationsReducer = (state = { complications: [], loading: false }, action) => {
    switch(action.type) {
      case 'CREATE_COMPLICATION':
        return {
          ...state,
          complications: [...state.complications, action.complication],
          loading: false
        }
        case 'DELETE_COMPLICATION':
          const complications = state.complications.filter(complication => complication.id !== action.complicationId)
          return {
            complications: complications,
            loading: false
          }
          case 'ADD_COMPLICATIONS':
            return {
              ...state,
              complications: action.complications,
              loading: false
            }
          case 'UPDATE_COMPLICATION':
            const index = state.complications.findIndex(complication => complication.id === action.complication.id)
          return {
            ...state,
            complications: [...state.complications.slice(0, index), action.complication, ...state.complications.slice(index + 1)],
            loading: false
          }
       
        
      default:
        return state;
    }
  }
  
  export default complicationsReducer;
