import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Register  from "./pages/register/Register";
import {BrowserRouter, Redirect, Route, Switch, useHistory}  from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../src/redux/actions/posts';


function App() {

  
  const user = JSON.parse(localStorage.getItem('profile'));
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(getPosts());
  },[dispatch]);

  

  return (

    <>
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/profile" component={Profile} />
      
    </div>
  </BrowserRouter>
  </>
  );
}

export default App;
