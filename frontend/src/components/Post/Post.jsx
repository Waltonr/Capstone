import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import CreateReply from "../CreateReply/CreateReply";
import { Link } from "react-router-dom";
import axios from "axios";
import useCustomForm from "../../hooks/useCustomForm";


const Post = (props) => {
    const { post } = props;
    const { userid } = props;
    const { id } = useParams();
    const [user, token] = useAuth(); 
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
      <div className="post">
        <div>
          <Link className="userlink" to={`/profile/${userid}`}> username</Link>
          <Link className="editlink" to={`/editpost/${post.id}`} likes={post.likes} dislikes={post.dislikes} >edit</Link>
        </div>
        <div className="posttext">
          {post.text}
        </div>
        <div className="likes">
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