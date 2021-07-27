import React, {useState} from 'react'
import './topbar.css';
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux';
import {LOGOUT} from '../../redux/actiontypes/actiontypes'
import { Search, Home, Chat, DeveloperMode, ExitToApp } from "@material-ui/icons";
import {getGuest} from '../../redux/actions/posts';

export default function Topbar() {

  const dispatch = useDispatch();
  const history = useHistory();

  const [coder, setCoder] = useState({name : " "});

  console.log(coder);

  const logout = () =>{

    dispatch({
      type : 'LOGOUT',

    })

    history.push('/');


  }

  const gettingGuest = () => {
    console.log(coder);
    dispatch(getGuest(coder.name));
    setCoder({name : ""});
    history.push('/guest/profile');
  }


  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">CodeGram</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
        

          <input
          type = "text"
            placeholder="Search for friend"
            className="searchInput"
            value = {coder.name}
            onChange={(e) => setCoder({ ...coder, name: e.target.value })}
          />
           
        <div onClick = {gettingGuest} className="srchButton" >
        <Search className="searchIcon"  />
        </div>
          
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


