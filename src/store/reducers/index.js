import { combineReducers } from 'redux';
import {systemReducer} from './systemReducer';
import { locationReducer } from './locationReducer';


const rootReducer = combineReducers({
  system: systemReducer,
  location: locationReducer
})

export default rootReducer;