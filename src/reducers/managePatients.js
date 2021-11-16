const patientsReducer = (state = { patients: [], loading: false}, action) => {
    switch(action.type) {
      case 'LOADING_PATIENTS':
        return {
          ...state,
          patients: [...state.patients],
          loading: true
        }
      case 'ADD_PATIENTS':
        return {
          ...state,
          patients: action.patients,
          loading: false
        }
      case 'CREATE_PATIENT':
        return {
          ...state,
          patients: [...state.patients, action.patient],
          loading: false
        }
        case 'ADD_NEW_CONVERSATION':

          const index = state.patients.findIndex(patient => String(patient.id) === String(action.patient.id))
          
            return !!index || index === 0 ? (
                {...state, patients: [
                    ...state.patients.slice(0, index), 
                    action.patient,
                    ...state.patients.slice(index + 1)
                ], loading: false} 
            ): state
        case 'ERROR':
          return {...state, error: action.errorMessage}
      default:
        return state;
    }
  }
  
  export default patientsReducer;




 