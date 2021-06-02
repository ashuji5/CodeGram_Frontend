import React from 'react'
import './topbar.css';
import { Search, Home, Chat, DeveloperMode } from "@material-ui/icons";

export default function Topbar() {
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
        <img src="/assets/person/4.jpg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}


