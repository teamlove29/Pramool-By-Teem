import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'
import RegisterReducer from "./RegisterReducer";
import authReducer from './AuthRuducer';

//ชนิดที่จะเรียก
const rootReducer = combineReducers({
    members : RegisterReducer,
    form : reduxForm,
    auth: authReducer
})

export default rootReducer;

