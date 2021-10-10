import complicationsReducer from './manageComplication'
import medicationsReducer from './manageMedications'
import userReducer from './manageUser'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    complications: complicationsReducer,
    medications: medicationsReducer,
    user: userReducer,
     
})
export default rootReducer