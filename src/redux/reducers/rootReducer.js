import {combineReducers} from 'redux';
import postReducer from '../reducers/posts';
import {authreducer} from "../reducers/auth"
import userPostReducer from '../reducers/userPost';
import guestReducer from './guest'

const rootReducer = combineReducers({
    postReducer, authreducer, userPostReducer, guestReducer
});

export default rootReducer;