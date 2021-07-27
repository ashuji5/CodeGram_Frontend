import "./post.css";
import { MoreVert, Comment, Delete } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState, } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editPost, deletePost, likePost, postComment, getPosts } from '../../redux/actions/posts'
import { createComment } from "../../api";
import Comments from '../post/Comment';


export default function Post({ post, profile }) {


  const [comment, setComment] = useState({ content: '' });


  // console.log(comment)

  const dispatch = useDispatch();

  const showComment = () => {


    var cm = document.querySelectorAll(".cmnt");

    // var cm = document.getElementById('cmnt')

    // console.log(cm);

     cm.forEach(x => {
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
     })

    // if (cm.style.display === "none") {
    //   cm.style.display = "block";
    // } else {
    //   cm.style.display = "none";
    // }

  }

  const createComment = async(postId) => {

    console.log("it clicked");

    await dispatch(postComment(postId, comment));
    dispatch(getPosts());

    setComment({ content: " " })

  }



  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              // src={Users.filter((u) => u.id === post?._id)[0].profilePicture}
              alt=""
            />
            <span className="postUsername">
              {post.name}
            </span>
            <span className="postDate">{post.createdAt}</span>
          </div>

          {profile ?
            <div onClick={() => dispatch(deletePost(post._id))} className="postRight">
              <Delete />
            </div>
            : <div></div>}

          {profile ? <div onClick={() => dispatch(editPost(post._id))} className="postTopRight">
            <MoreVert />
          </div>
            : <div></div>}



        </div>
        <div className="postCenter">
          <span className="postText">{post.message}</span>
          <img className="postImg" src={post.selectedFile} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src="assets/like.png" onClick={() => { dispatch(likePost(post._id)) }} alt="" />

            <span className="postLikeCounter">{post.likes.length} people like it</span>
          </div>
          <div onClick={showComment} className="postBottomRight">
            <Comment className="commentIcon" />
            <span className="postCommentText"> comments</span>
          </div>

        </div>
        <div id="cmnt" className="cmnt comment">

          <section id="app">
            <div class="container">
              <div class="row">
                <div class="col-6">
                 {post.comment.map((c) => (
                  <Comments
                  key = {c._id}
                  comment = {c}
                  />
                 ))}
                </div>
              </div>
              <div class="row">
                <div className="cmnt-input">
                  <input type="text" class="input" placeholder="Write a comment" value={comment.content} onChange={(e) => setComment({ ...comment, content: e.target.value })}
                  />
                  <button className='primaryContained float-right' onClick = {() => createComment(post._id)}>Add Comment</button>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}