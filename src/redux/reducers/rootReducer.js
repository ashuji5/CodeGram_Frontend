import {combineReducers} from 'redux';
import postReducer from '../reducers/posts';
import {authreducer} from "../reducers/auth"
import userPostReducer from '../reducers/userPost';
import {doubtReducer} from '../reducers/doubt'
import guestReducer from './guest'

const rootReducer = combineReducers({
    postReducer, authreducer, userPostReducer, guestReducer, doubtReducer
});

export default rootReducer;