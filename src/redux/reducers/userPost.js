import * as actiontypes from '../actiontypes/actiontypes';

const instate = {
    profilePost : [],
    currentPostId : null,
    loading: true,

}

const userPostReducer = (state = instate, action) => {

    switch(action.type){

        case actiontypes.POSTBYID : 
        return { ...state, profilePost : action.payload}

        case actiontypes.CREATE_POST:
            return{
                currentPostId : null,
               profilePost : [...state.profilePost, action.payload]
            } 
            
        case actiontypes.CREATE_FAIL:
            return{
            loading : false,    
            error : action.payload
        }

        case actiontypes.UPDATING_POST:
            return {profilePost : state.profilePost,
                loading : true}
        
        case actiontypes.SET_CURRENT_POSTID : 
        return{
            profilePost : state.profilePost,
            currentPostId : action.payload
        }

        case actiontypes.UPDATE_POST : 
        case actiontypes.LIKE:
        return {...state,  profilePost: state.profilePost.map((post) => post._id === action.payload._id ? action.payload : post), loading : false}
        
        case actiontypes.DELETE_POST : 
        return {...state, profilePost : state.profilePost.filter((post) => post._id !== action.payload)}

        default:
            return state
    }
}

export default userPostReducer;