import React,{useState} from 'react'
import {SportsEsports, LiveHelp, Help} from "@material-ui/icons";
import {useEffect} from 'react';
import {getDoubt, createDoubt} from '../../redux/actions/doubtAction';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import decode from 'jwt-decode';

import './doubt.css';

const DoubtGround = () =>{

    const user = JSON.parse(localStorage.getItem('profile'));

    const [doubtData, setDoubttData] = useState({ Question : '' });


    // console.log(doubtData);

    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () =>{

        dispatch({
          type : 'LOGOUT',
    
        })
    
        history.push('/');
    
    
      }

    const postDoubt = (e) =>{
     e.preventDefault();

     console.log(doubtData);

     dispatch(createDoubt(doubtData));

     setDoubttData({Question : ''});
    }

    useEffect(() => {
        dispatch(getDoubt())
       },[dispatch]);


       useEffect(() =>{
    
        const token = user?.token;
    
        if(token){
          const decodedToken = decode(token);
    
          if(decodedToken.exp * 1000 < new Date().getTime()) logout();


        }



      },[dispatch]);

    return(
        <>
        <div className="mainDiv">

        <div className="topDiv">
            <SportsEsports className="console"/>
            <h1>DounbtGround</h1>
        </div>
        

        <div className="inputBox">
        <div className="leftDiv">
            <input 
            type="text"
            placeholder = "Search a question" 
            />
            <button>Search</button>
        </div>

        <div className="rightDiv">
            <input 
            type="text"
            placeholder = "Ask a Question"
            value={doubtData.Question}
              onChange={(e) => setDoubttData({ ...doubtData, Question: e.target.value })}
             />
                         <button onClick = {postDoubt}>Ask</button>
        </div>
        </div>
        

        <div className="downDiv">

            <div className="heading">
                <LiveHelp className="help"/>
            <h2>Questions</h2>
            </div>

            <div className="questions">

                <div className="leftqns">
                    <p className="majorans">Answers:</p>
                    <p className="ans">526</p>
                </div>
                <div className="centerqns">
                    <h3>This is a very very extra long that you haven't seenany where so be prepared question?</h3>
                </div>
                <div className="rightqns">
                    <p>time</p>
                    <p>2020 5:80 pm Monday</p>
                </div>

            </div>

        </div>

        </div>
        
        </>
    )
}

export default DoubtGround
