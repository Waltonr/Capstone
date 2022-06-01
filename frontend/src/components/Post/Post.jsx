import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import CreateReply from "../CreateReply/CreateReply";

const Post = (props) => {
    const { post} = props

    const [user, token] = useAuth() 
    const [likedButton, setLikedButton] = useState("inactive");
    const [dislikedButton, setDislikedButton] = useState("inactive");

  


    function handleClick() {
        if(likedButton === "inactive"){
          setLikedButton("liked")
          setDislikedButton("inactive")
        }
        else if (dislikedButton === "inactive"){
          setDislikedButton('disliked')
          setLikedButton("inactive")
        }
      }
    return ( 
      <div>
        {user.username}
        {post.text}
        <button className={likedButton} onClick={handleClick}></button>
        <button className={dislikedButton} onClick={handleClick}></button>
        <CreateReply />
      </div>
     );
}
 
export default Post;