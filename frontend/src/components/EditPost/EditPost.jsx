import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";

let init = {
    text: "",
    likes: 0,
    dislikes: 0,
    user_id: ""
}

const EditPost = (props) => {
    const {post} = props
    const [formData, handleInputChange] = useCustomForm(init, editPost());
    const {likes} = props
    const {dislikes} = props
    const { id } = useParams();
    const [user, token] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
      };
    
    async function editPost() {
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
    };
    



    return (
        <form onSubmit={handleSubmit}>
            <div>
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
                    <button type="submit">Edit</button>
                </label>
            </div>
        </form>
     );
}
 
export default EditPost;