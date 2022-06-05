import React, { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import CreateReply from "../CreateReply/CreateReply";
import { Link } from "react-router-dom";
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";


let initvalues = {
  text: ""
}
const Post = (props) => {
    const { post} = props

    const [user, token] = useAuth() 
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, editPost)
    const [likedButton, setLikedButton] = useState("inactive");
    const [dislikedButton, setDislikedButton] = useState("inactive");

    async function editPost() {
      try {
        let response = await axios.put("http://127.0.0.1:8000/api/post/1/",
        {
            headers: {
              Authorization: "Bearer " + token
            }
        }
        );
      } catch (error) {
        console.log("error with editing post")
      }
    }

    function updatePost() {
    }


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
        <Link to="profile">{user.username}</Link>
        {post.text}
        <button className={likedButton} onClick={handleClick}></button>
        {post.likes}
        <button className={dislikedButton} onClick={handleClick}></button>
        {post.dislikes}
        <Link to="editpost">edit</Link>
        <CreateReply />
      </div>
     );
}
 
export default Post;