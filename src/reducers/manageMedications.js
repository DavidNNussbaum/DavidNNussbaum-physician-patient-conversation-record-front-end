const medicationsReducer = (state = { medications: [], loading: false}, action) => {
    switch(action.type) {
      case 'LOADING_MEDICATIONS':
        return {
          ...state,
          medications: [...state.medications],
          loading: true
        }
      case 'ADD_MEDS':
        return {
          ...state,
          medications: action.medications,
          loading: false
        }
      case 'CREATE_MEDICATION':
        return {
          ...state,
          medications: [...state.medications, action.medication],
          loading: false
        }
        case 'ADD_NEW_COMP':

          const index = state.medications.findIndex(medication => String(medication.id) === String(action.medication.id))
          
            return !!index || index === 0 ? (
                {...state, medications: [
                    ...state.medications.slice(0, index), 
                    action.medication,
                    ...state.medications.slice(index + 1)
                ], loading: false} 
            ): state
        case 'ERROR':
          return {...state, error: action.errorMessage}
      default:
        return state;
    }
  }
  
  export default medicationsReducer;




 