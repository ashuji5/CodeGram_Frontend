import React from 'react'
import './share.css'
import { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { PermMedia } from "@material-ui/icons"
import { useDispatch } from 'react-redux';
import { createPost, editPost, updatePost } from '../../redux/actions/posts';
import { useSelector } from 'react-redux';

export default function Share() {

  const [postData, setPostData] = useState({ message: '', selectedFile: '' });
  const dispatch = useDispatch();

  const postId = useSelector(state => state.postReducer.currentPostId);
  const post = useSelector((state) => (postId ? state.postReducer.posts.find((message) => message._id === postId) : null));
  const user = JSON.parse(localStorage.getItem('profile'));
  console.log(postId)
  console.log(postData);

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (postId != null) {
      dispatch(updatePost(postId, {...postData, name : user?.result?.name}));
    }

    else
      dispatch(createPost({...postData, name : user?.result?.name}))

    setPostData({ message: '', selectedFile: '' });
    
  };


  return (
    <div className="share">
      <form onSubmit={handleSubmit}>
        <div className="shareWrapper">
          <div className="shareTop">
            
            

            <img className="shareProfileImg" src="/assets/person/4.jpg" alt="" />
            <input type="text"
              name="message"
              placeholder="What's in your mind Safak?"
              value={postData.message}
              onChange={(e) => setPostData({ ...postData, message: e.target.value })}
              className="shareInput"
            />
            
            
          </div>
          <hr className="shareHr" />
          <div className="shareBottom">
            <div className="shareOptions">
              <div className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon" />

                 <div  className="selectFile">
                 <FileBase64 type="file" className="shareOptionText" value={postData.selectedFile} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />

                 </div>
              </div>

            </div>
            <button type="submit" className="shareButton">Share</button>
          </div>
        </div>
      </form>
    </div>
  );
}
