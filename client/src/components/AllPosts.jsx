import React from "react";
import PostDetails from "./PostDetails";

const AllPost = (props) => {
    return (
        <div>
            {props.data && props.data.map((item , index) =>(
                <div className="posts" key={index}>
                    <PostDetails data = {item} usres ={props.usres}/>
                </div>
            ))}
        </div>
    )
}

export default AllPost