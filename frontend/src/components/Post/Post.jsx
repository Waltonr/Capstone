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
      <div className="post">
        <div>
          <Link className="userlink" to="profile">{user.username}</Link>
          <Link className="editlink" to="editpost">edit</Link>
        </div>
        <div className="posttext">
          {post.text}
        </div>
        <div>
          <button className="likedbutton" onClick={handleClick}>Like</button>
          {post.likes}
          <button className="dislikedbutton" onClick={handleClick}>Dislike</button>
          {post.dislikes}
        </div>
        <CreateReply />
      </div>
     );
}
 
export default Post;