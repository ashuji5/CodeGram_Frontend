
import * as actiontypes from '../actiontypes/actiontypes';

const instate = {
    guest : null,
    loading : true,
    posts: []
}

const guestReducer = (state = instate, action) => {

    switch (action.type){
        case actiontypes.SET_GUEST :
            // localStorage.setItem('guest', JSON.stringify({...action?.payload}));
            return{
                guest : action.payload,
                loading : false
            }

            case actiontypes.GUEST_POST_REQUEST:
                return{

                ...state, loading : true
            }

        case actiontypes.GUEST_POST_SUCCESS :
            return{
                ...state, posts : action.payload
            }   

            default:
                return state
    }
}

export default guestReducer;