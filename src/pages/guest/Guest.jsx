import React from 'react'
import {useSelector} from 'react-redux';

import "../profile/profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import GuestFeed from "../../components/feed/GuestFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import GuestRightbar from '../../components/guestRightbar/GuestRightbar';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'
import {useEffect} from 'react';
import decode from 'jwt-decode';
import {findGuestPostById} from '../../redux/actions/posts'; 

const Guest = () => {


  const guest = useSelector(state => state.guestReducer.guest)
  

    const loading = useSelector(state => state.guestReducer.loading);
     console.log(guest);
    // console.log(loading);

    const pokemon = useSelector(state => state.authreducer.user);

    console.log(pokemon.result.followers);

    


    // console.log(guest[0]._id)
    const user = JSON.parse(localStorage.getItem('profile'));
    const dispatch = useDispatch();
  const history = useHistory();

    const logout = () =>{

        dispatch({
          type : 'LOGOUT',
    
        })
    
        history.push('/');
    
    
      }
    
      useEffect(() =>{
    
        const token = user?.token;
    
        if(token){
          const decodedToken = decode(token);
    
          if(decodedToken.exp * 1000 < new Date().getTime()) logout();

        }

       
        // dispatch(findGuestPostById(guest?guest[0]._id: null));

      },[guest]);


      if(loading== false){

  return ( 
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/6.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/4.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <div className="feed">
            <GuestFeed />
            </div>
            <GuestRightbar/>
          </div>
        </div>
      </div>
    </>
  );
      }

      else{
          return(
              <>

<h1>Loading</h1>
              </>
          )
      }
}

export default Guest
