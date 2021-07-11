import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ProfileFeed from "../../components/feed/ProfileFeed";
import Rightbar from "../../components/rightbar/Rightbar";
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom'
import {useEffect} from 'react';
import decode from 'jwt-decode';
import {getPosts} from '../../redux/actions/posts';



export default function Profile() {


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

        dispatch(getPosts());

      },[dispatch]);



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
            <ProfileFeed profile/>
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}