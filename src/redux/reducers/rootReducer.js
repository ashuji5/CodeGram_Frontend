import {combineReducers} from 'redux';
import postReducer from '../reducers/posts';
import {authreducer} from "../reducers/auth"

const rootReducer = combineReducers({
    postReducer, authreducer
});

export default rootReducer;