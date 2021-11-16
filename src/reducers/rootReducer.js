import conversationsReducer from './manageConversation'
import patientsReducer from './managePatients'
import userReducer from './manageUser'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    conversations: conversationsReducer,
    patients: patientsReducer,
    user: userReducer,
     
})
export default rootReducer