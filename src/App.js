import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../src/redux/actions/posts';


function App() {

  const post = useSelector(state => state.postReducer.posts);
  const dispatch = useDispatch();

  useEffect(() =>{
   dispatch(getPosts());
  },[dispatch]);

  return (
    <div >
      <Login/>
    </div>
  );
}

export default App;
