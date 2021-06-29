import * as actiontypes from '../actiontypes/actiontypes';

const instate = {
    posts: [], 
    profilePost : [],
    currentPostId : null,
    loading: true,
    error: " ",

}

const postReducer = (state = instate, action) => {

    switch (action.type) {

        case actiontypes.GET_POSTS_REQUEST:
            return {
                loading: true,
                posts: []
            }

        case actiontypes.GET_POSTS_SUCCESS:
            return {
                profilePost : state.profilePost,
                loading: false,
                currentPostId : null,
                posts: action.payload
            }

        case actiontypes.GET_POSTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }

        case actiontypes.CREATE_POST:
            return{
                currentPostId : null,
               posts : [...state.posts, action.payload]
            } 
            
        case actiontypes.CREATE_FAIL:
            return{
            loading : false,    
            error : action.payload
        }

        case actiontypes.UPDATING_POST:
            return {posts : state.posts,
                loading : true}
        
        case actiontypes.SET_CURRENT_POSTID : 
        return{
            posts : state.posts,
            currentPostId : action.payload
        }

        case actiontypes.UPDATE_POST : 
        case actiontypes.LIKE:
        return {...state,  posts: state.posts.map((post) => post._id === action.payload._id ? action.payload : post), loading : false}
        
        case actiontypes.DELETE_POST : 
        return {...state, posts : state.posts.filter((post) => post._id !== action.payload)}

        case actiontypes.POSTBYID : 
        return { ...state, profilePost : action.payload}
        

        default:
            return state
    }

}

export default postReducer;