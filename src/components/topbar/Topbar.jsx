import React from 'react'
import './topbar.css';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../redux/actiontypes/actiontypes'
import { Search, Home, Chat, DeveloperMode, ExitToApp } from "@material-ui/icons";

export default function Topbar() {

  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () =>{

    dispatch({
      type : 'LOGOUT',

    })

    history.push('/');


  }


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">CodeGram</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
       
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Home />
          </div>
          <div className="topbarIconItem">
            <Chat />
          </div>
          <div className="topbarIconItem">
            <DeveloperMode />
            
          </div>
        </div>
        <div className="right-nav">
        <img src="/assets/person/4.jpg" alt="" className="topbarImg"/>
        <div onClick = {logout} className="logout">
        <ExitToApp />

        </div>
        </div>
      </div>
    </div>
  );
}


