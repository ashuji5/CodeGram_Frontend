import React from 'react'
import {SportsEsports, LiveHelp, Help} from "@material-ui/icons";
import './doubt.css';

const DoubtGround = () =>{
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
             />
                         <button>Ask</button>
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
