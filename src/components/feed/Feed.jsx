import React from 'react'
import {useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import {findPostById} from '../../redux/actions/posts';
import {useSelector, useDispatch} from 'react-redux';


function Feed() {

    const posts = useSelector(state => state.postReducer.posts);
     const loading = useSelector(state => state.postReducer.loading);
     const user = JSON.parse(localStorage.getItem('profile'));  
     const userPost = useSelector(state => state.postReducer.profilePost);
     console.log(userPost);
     console.log(user.result._id);


     
  

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
            {posts.map((p) => (
          <Post key={p._id} post={p}/>
        ))}

            </div>
        </div>
        </>
    )}
            
}

export default Feed
