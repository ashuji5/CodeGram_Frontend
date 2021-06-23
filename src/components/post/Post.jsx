import "./post.css";
import { MoreVert, Comment, Delete } from "@material-ui/icons";
import { Users } from "../../dummyData";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { editPost, deletePost, likePost } from '../../redux/actions/posts'


export default function Post({ post, profile }) {
  const [like, setLike] = useState(post.like)
  const [isLiked, setIsLiked] = useState(false)

  const dispatch = useDispatch();



  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1)
    setIsLiked(!isLiked)
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
              {post.creator}
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

            <span className="postLikeCounter">{post.likeCount} people like it</span>
          </div>
          <div className="postBottomRight">
            <Comment className="commentIcon" />
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}