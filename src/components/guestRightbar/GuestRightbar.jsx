import React, {useState} from 'react'
import '../rightbar/rightbar.css'
import { Add, Remove } from "@material-ui/icons"
import {useSelector, useDispatch} from 'react-redux'
import {followUser, unfollowUser} from '../../api/index'

const GuestRightbar = () => {


  const guest = useSelector(state => state.guestReducer.guest);
  const followings = useSelector(state => state.authreducer.followings)

  const dispatch = useDispatch();

  const [followed, setFollowed] = useState(
    followings.includes(guest.user[0]._id)
  );


  const handleClick = async () => {
    try {
      if (followed) {
        await unfollowUser(guest.user[0]._id)
        dispatch({ type: "UNFOLLOW", payload: guest.user[0]._id });
      } else {
        await followUser(guest.user[0]._id)
        dispatch({ type: "FOLLOW", payload: guest.user[0]._id });
      }
      setFollowed(!followed);
    } catch (err) {

      console.log(err)
    }

  };




      return (
        <>




        <div className="rightbar">
        <div className="profileRightbar">

        <button className="rightbarFollowButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>

          <h4 className="rightbarTitle">User information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City:</span>
              <span className="rightbarInfoValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From:</span>
              <span className="rightbarInfoValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Relationship:</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className="rightbarTitle">User friends</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img
                src="assets/person/1.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/2.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/3.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/5.jpg"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/6.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
            <div className="rightbarFollowing">
              <img
                src="assets/person/7.png"
                alt=""
                className="rightbarFollowingImg"
              />
              <span className="rightbarFollowingName">John Carter</span>
            </div>
          </div> 
          </div>
          </div>
        </>
      );
    
}

export default GuestRightbar;
