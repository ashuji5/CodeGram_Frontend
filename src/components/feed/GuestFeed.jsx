import React from 'react'
import {useEffect} from 'react';
import Share from '../share/Share';
import Post from '../post/Post';
import './feed.css';
import {findGuestPostById} from '../../redux/actions/posts';
import {useSelector, useDispatch} from 'react-redux';



const GuestFeed = ({profile}) =>{


    // const guest = JSON.parse(localStorage.getItem('guest'));



    const user = JSON.parse(localStorage.getItem('profile'));  
    const guest = useSelector(state => state.guestReducer.guest);
    const loading = useSelector(state => state.guestReducer.loading);
    const dispatch = useDispatch();

    // console.log(userPost);

    const userPost = guest.post;

    
    
    // useEffect(() =>{
    //  dispatch(findGuestPostById(guest[0]._id));
    // },[dispatch]);

    // useEffect(() => {
    //     dispatch(findGuestPostById(guest? guest[0]._id: null));
    // },[loading])

    if(loading == true || userPost==null ){
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
            {/* <Share/> */}
            {userPost?.map((p) => (
          <Post key={p._id} post={p} profile = {profile} />
        ))}

            </div>
        </div>
        </>
    )
            }

}

export default GuestFeed;
