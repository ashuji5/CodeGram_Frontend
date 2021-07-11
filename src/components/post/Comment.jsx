import React from 'react'

const Comment = ({comment}) => {
    return(
        <>
        <div class="comment">
                    <p className="comment-content">
                     name : {comment.content}
                    </p>
                  </div>
        </>
    )
}

export default Comment;
