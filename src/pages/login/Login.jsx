import "./login.css";

export default function Login() {
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
          <div className="loginBox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <button className="loginButton">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}