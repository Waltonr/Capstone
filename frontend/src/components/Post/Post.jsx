import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import DisplayReplies from "../DisplayReplies/DisplayReplies";
import CreateReply from "../CreateReply/CreateReply";


const Post = (props) => {
  const { post } = props;
  const { userid } = props;
  const { id } = useParams();
  const [user, token] = useAuth(); 
  const [replies, setAllReplies] = useState();
  const [memberName, setMemberName] = useState([]);
  const [likedButton, setLikedButton] = useState("inactive");
  const [dislikedButton, setDislikedButton] = useState("inactive");
  const navigate = useNavigate();
  
  useEffect(() => {
    const getReplies = async() => {
      try {
          let response = await axios.get(`http://127.0.0.1:8000/api/replies/${post.id}/`, {
              headers: {
                  Authorization: "Bearer " + token,
              },
          });
          console.log(response.data)
          setAllReplies(response.data)
      } catch (error) {
          console.log("error with get replies by post id")
      }
    };
    getReplies();
  }, [token])

  const getMemberName = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/auth/${userid}/`,
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
      );
      console.log(response.data)
      setMemberName(response.data);
    } catch (error) {
        if (axios.isCancel(error)) {
          return false;
        }
      console.log("error with getting user's name")
      }
    return null
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
      getMemberName({cancelToken:source.token});
    return () => {
      source.cancel("axios request cancelled");
    }
  }, []);

  function updateLikes() {
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
        <button onClick={() => navigate(`/profile/${userid}`)}>{memberName.username}</button>
        <Link className="editlink" to={`/editpost/${post.id}`} likes={post.likes} dislikes={post.dislikes} >edit</Link>
      </div>
      <div className="posttext">
        {post.text}
      </div>
      <div className="likes">
        <button className="likedbutton" onClick={updateLikes}>Like</button>
        {post.likes}
        <button className="dislikedbutton" onClick={updateLikes}>Dislike</button>
        {post.dislikes}
      </div>
      <CreateReply postid={post.id}/>
      <DisplayReplies getAllRepliesProperty={replies}/>
    </div>
    );
}
 
export default Post;