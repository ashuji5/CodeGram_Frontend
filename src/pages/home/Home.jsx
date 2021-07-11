import React from 'react'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom'
import {useEffect} from 'react';
import decode from 'jwt-decode';
import {getPosts} from '../../redux/actions/posts';

import './home.css'

const Home = () => {

    const user = JSON.parse(localStorage.getItem('profile'));
    const userPost = useSelector(state => state.postReducer.profilePost);
    const dispatch = useDispatch();
  const history = useHistory();

    const logout = () =>{

        dispatch({
          type : 'LOGOUT',
    
        })
    
        history.push('/');
    
    
      }

      // useEffect(() => {
      //   dispatch(getPosts());
      // },[dispatch]);
      
    
      useEffect(() =>{
    
        const token = user?.token;
    
        if(token){
          const decodedToken = decode(token);
    
          if(decodedToken.exp * 1000 < new Date().getTime()) logout();


        }



      },[dispatch]);


 
    return (
        <>
            <Topbar/>
            <div className="homeContainer">
                <Sidebar/>
                <Feed/>
                <Rightbar/>
            </div>
        </>
    )
}

export default Home;