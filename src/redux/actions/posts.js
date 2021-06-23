
import * as api from '../../api/index';
import * as actiontypes from '../actiontypes/actiontypes'

export const getPosts = () => async(dispatch) => {

    try {

        dispatch({
            type: actiontypes.GET_POSTS_REQUEST
        });

        const {data} = await api.fetchPosts();

        dispatch({
            type : actiontypes.GET_POSTS_SUCCESS,
            payload : data
        });
        
    } catch (error) {
        
        dispatch({
            type : actiontypes.GET_POSTS_FAIL,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        });

    }
   
};

export const createPost=(post) => async(dispatch) =>{
    try {

        const {data} = await api.createPost(post);

        dispatch({
            type: actiontypes.CREATE_POST,
            payload : data
        });
        
    } catch (error) {

        dispatch({
            type : actiontypes.CREATE_FAIL,
            payload : error.response && error.response.data.message ? error.response.data.message : error.message
        })
        
    }
}

export const editPost = (postId) => {



    return{
        type : actiontypes.SET_CURRENT_POSTID,
        payload : postId
    
    }  
}

export const updatePost = (postID, post) => async(dispatch) =>{

    try {

        dispatch({
            type: actiontypes.UPDATING_POST
        });
        
        const {data} = await api.updatePost(postID, post);

        dispatch({
            type : actiontypes.UPDATE_POST,
            payload : data
                })

    } catch (error) {

        console.log(error)
        
    }

}

export const deletePost = (id) => async(dispatch) =>{
    try {

        await api.deletePost(id);

        dispatch({
            type : actiontypes.DELETE_POST,
            payload : id
        })
        
    } catch (error) {

        console.log(error);
        
    }
}

export const likePost = (id) => async(dispatch) => {
    try {

        const {data} = await api.likePost(id);

        dispatch({
            type : actiontypes.LIKE,
            payload : data
                })
        
    } catch (error) {

        console.log(error);
        
    }
}