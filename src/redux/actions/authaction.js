import {AUTH} from './../actiontypes/actiontypes';
import * as api from '../../api/index';

export const signin = (formdata, history) => async (dispatch) => {
    try {

        const {data} = await api.signIn(formdata);

        dispatch({type : AUTH, data});
        
        history.push('/home');

    } catch (error) {
        console.log(error);
    }
};

export const signup = (formdata, history) => async (dispatch) => {
    try {
        const {data} = await api.signUp(formdata);

        dispatch({type : AUTH, data});

        history.push('/home');
    } catch (error) {
        console.log(error);
    }
}

export const Follow = (userId) => ({
    type : "FOLLOW",
    payload : userId
})

export const Unfollow = (userId) => ({
    type : "UNFOLLOW",
    payload : userId
})

export const getFriends = (userId) => async(dispatch) => {
    try {
        
        const {data} = await api.userFriends(userId);

        dispatch({
            type : "FRIENDS",
            payload : data
        })

    } catch (error) {

        console.log(error.message);
        
    }
}