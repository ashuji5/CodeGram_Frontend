import React,{useEffect} from 'react'
import './sidebar.css'
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import {useDispatch, useSelector} from 'react-redux';
import {getFriends} from '../../redux/actions/authaction'

import {
    RssFeed,
    Chat,
    ExitToApp, 
    Person,
    Group,
    Code
   
  } from "@material-ui/icons";


export default function Sidebar() {

  const user = JSON.parse(localStorage.getItem('profile'));

  const friend = useSelector(state => state.userPostReducer.friends);

  console.log(friend);

  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getFriends(user.result._id))
  },[dispatch]);

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
          {friend?.map((u) => (
            <CloseFriend key={u._id} user={u} />
          ))}

          </ul>
         
        </div>
      </div>
    );
  }
