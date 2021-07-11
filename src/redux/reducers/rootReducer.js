import {combineReducers} from 'redux';
import postReducer from '../reducers/posts';
import {authreducer} from "../reducers/auth"
import userPostReducer from '../reducers/userPost';

const rootReducer = combineReducers({
    postReducer, authreducer, userPostReducer
});

export default rootReducer;