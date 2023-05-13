import React from "react";

const Comment = (props) => {
    console.log(props, "comment");
    return (
        <div className="comment-continer">
            <h3 className="comment-user">{props.data.user.fullName}</h3>
            <p className="comment-content">{props.data.content}</p>
        </div>
    )
}

export default Comment