import "./login.css";
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { Link, useHistory } from "react-router-dom";

export default function Login() {

  const dispatch = useDispatch();

  const history = useHistory();

  const inState = {name : "", email : "", password: ""};
  const[formData, setformData] = useState(inState);

  const handleSubmit = (e) => {
  e.preventDefault();

  // dispatch(signin(formData, history));

  
  }

  const handleChange = (e) => {
    setformData({...formData, [e.target.name] : e.target.value})
}




  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
            <img className="usrImg" src="assets/user.png" alt="" />
           
       
        </div>
        <div className="loginRight">
            <div className="desc">
        <h3 className="loginLogo">CodeGram</h3>
        <span className="loginDesc">
            Connect with friends and the world around you on CodeGram.
          </span>
          </div>
          <form onSubmit = {handleSubmit} className="loginBox">
            <input
            type = "text"
             name = "name"
             onChange = {handleChange}
             placeholder="Name" 
             className="loginInput" />

            <input 
            type = "email"
             name = "email"
             onChange = {handleChange}
            placeholder="Email" 
            className="loginInput" />

            <input
            type = "password"
             name = "password"
             onChange = {handleChange}
             placeholder="Enter your password" 
            className="loginInput" />
            <button type="submit" className="loginButton">Log In</button>
            <Link  style={{ textDecoration: 'none' }} className="loginRegisterButton " to = "/register">
              Create a New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}