
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

export const findPostById = (id) => async(dispatch) => {
    try {

        // dispatch({
        //     type: actiontypes.GET_POSTS_REQUEST
        // });

        const {data} = await api.getPostById(id);

        dispatch({
            type : actiontypes.POSTBYID,
            payload : data
        })

        
    } catch (error) {

        console.log(error);
        
    }
}

export const postComment = (postID, comment) => async(dispatch) =>{

    try {

       
        
        const {data} = await api.createComment(postID, comment);

        // dispatch({
        //     type : actiontypes.CREATE_COMMENT,
        //     payload : data
        //         })

    } catch (error) {

        console.log(error)
        
    }

}

export const getGuest = (guestName) => async(dispatch) =>{
    try {



        const {data} = await api.getGuest(guestName);

        dispatch({
            type : actiontypes.SET_GUEST,
            payload : data
        })
        
    } catch (error) {
        
    }
}

export const findGuestPostById = (id) => async(dispatch) => {
    try {

        //   dispatch({
        //     type: actiontypes.GUEST_POST_REQUEST
        // });

        const {data} = await api.getPostById(id);

        dispatch({
            type : actiontypes.GUEST_POST_SUCCESS,
            payload : data
        })

        
    } catch (error) {

        console.log(error);
        
    }
}