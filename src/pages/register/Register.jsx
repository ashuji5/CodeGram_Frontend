import "./register.css";
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import { Link, useHistory } from "react-router-dom";
import {signup} from "../../redux/actions/authaction";

export default function Register() {

    const dispatch = useDispatch();
    const history = useHistory();

    const inState = {name : "", email : "", password: "", confirmpassword: ""};
    const[formData, setformData] = useState(inState);

    const handleSubmit = (e) => {
    e.preventDefault();

     dispatch(signup(formData, history));
    
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

            <input 
            type = "password"
             name = "confirmpassword"
             onChange = {handleChange}
            placeholder="Re-type your password" 
            className="loginInput" />

            <button type="submit" className="loginButton">Sign Up</button>
            <Link  style={{ textDecoration: 'none' }} className="loginRegisterButton" to = "/login">
              Already Have an account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}