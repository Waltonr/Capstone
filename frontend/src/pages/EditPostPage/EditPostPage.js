import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import Post from "../../components/Post/Post";
import axios from "axios";

let initValues = {
    text: "",
    likes: 0,
    dislikes: 0,
    user_id: ""
}

const EditPost = (props) => {
    const {likes} = props
    const {dislikes} = props
    const [post, setAllPost] = useState();
    const { id } = useParams();
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initValues, editPost(getPost));


    async function getPost() {
        try {
            let response = await axios.get(
                `http://127.0.0.1:8000/api/post/${id}/`,
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );
            console.log(response.data)
            setAllPost(response.data)
        } catch (error) {
            console.log("error with get post by id")
        }
    }

    useEffect(() => {
        getPost();
      }, [token])

   

    async function editPost(post) {
        try {
            let response = await axios.put(
                `http://127.0.0.1:8000/api/post/${id}/`,
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );
            console.log(response.data)
            navigate("/socialfeed")
        } catch (error) {
            console.log("error with editing post")
            
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <input
                type="text" 
                name="text" 
                value={formData.text}
                onChange={handleInputChange}
                user_id={user.id}
                likes={likes}
                dislikes={dislikes}
                /> 
            </label>
            <button type="submit">Edit</button>
        </form>
     );
}
 
export default EditPost;