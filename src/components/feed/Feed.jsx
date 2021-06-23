import React from 'react'
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import { Posts } from "../../dummyData";
import {useSelector} from 'react-redux';


function Feed({profile}) {

    const posts = useSelector(state => state.postReducer.posts);
     const loading = useSelector(state => state.postReducer.loading);  



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
          <Post key={p._id} post={p} profile = {profile} />
        ))}

            </div>
        </div>
        </>
    )
            }
}

export default Feed
