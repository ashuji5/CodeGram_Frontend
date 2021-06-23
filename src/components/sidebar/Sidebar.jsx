import React from 'react'
import './sidebar.css'
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

import {
    RssFeed,
    Chat,
    ExitToApp,
    Person,
    Group,
    Code
   
  } from "@material-ui/icons";


export default function Sidebar() {
    return (
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sidebarListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chats</span>
            </li>
            
            <li className="sidebarListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Friends</span>
            </li>
           
            <li className="sidebarListItem">
              <Code className="sidebarIcon" />
              <span className="sidebarListItemText">Doubt Ground</span>
            </li>
            
            <li className="sidebarListItem">
              <Person className="sidebarIcon" />
              <span className="sidebarListItemText">Profile</span>
            </li>

            <li className="sidebarListItem">
              <ExitToApp className="sidebarIcon" />
              <span className="sidebarListItemText">Log Out</span>
            </li>

          </ul>
         
          <hr className="sidebarHr" />

          <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}

          </ul>
         
        </div>
      </div>
    );
  }
