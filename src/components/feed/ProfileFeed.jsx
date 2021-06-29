import React from 'react'
import {useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import {findPostById} from '../../redux/actions/posts';
import {useSelector, useDispatch} from 'react-redux';



const ProfileFeed = ({profile}) =>{

    const user = JSON.parse(localStorage.getItem('profile'));  
    const userPost = useSelector(state => state.postReducer.profilePost);
    const loading = useSelector(state => state.postReducer.loading);
    const dispatch = useDispatch();

    console.log(userPost);

    
    useEffect(() =>{
     dispatch(findPostById(user?.result?._id));
    },[]);


    if(loading){
        return(
            <>
            <h1>Loading...</h1>
            </>
        )
    }

    else{
    return (
        <>
        <div className="feed">
            <div className="feedWrapper">
            <Share/>
            {userPost.map((p) => (
          <Post key={p._id} post={p} profile = {profile} />
        ))}

            </div>
        </div>
        </>
    )
            }

}

export default ProfileFeed
