import React from 'react'
import './sidebar.css'

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
              <li className="sidebarFriend">
                  <img src="/assets/person/2.png" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Shubham Gupta</span>
              </li>


              <li className="sidebarFriend">
                  <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Charanpreet Singh</span>
              </li>

              <li className="sidebarFriend">
                  <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Manoranjan Padhi</span>
              </li>

              <li className="sidebarFriend">
                  <img src="/assets/person/6.png" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Shubham Kesri</span>
              </li>

              <li className="sidebarFriend">
                  <img src="/assets/person/7.png" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Bittu</span>
              </li>

              <li className="sidebarFriend">
                  <img src="/assets/person/8.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Sayan Sarkar</span>
              </li>

              <li className="sidebarFriend">
                  <img src="/assets/person/9.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Gagandeep Singh</span>
              </li>


              <li className="sidebarFriend">
                  <img src="/assets/person/10.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Tarun Narula</span>
              </li>


              <li className="sidebarFriend">
                  <img src="/assets/person/3.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Jaskirat Singh</span>
              </li>

              <li className="sidebarFriend">
                  <img src="/assets/person/5.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Harmanpal Singh</span>
              </li>



          </ul>
         
        </div>
      </div>
    );
  }
