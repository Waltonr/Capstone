import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import Post from "../../components/Post/Post";
import axios from "axios";

let initvalues = {
    text: ""
}

const EditPost = (props) => {
    const { id } = useParams();
    const [user, token] = useAuth();
    const navigate = useNavigate();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, editPost);

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
                {user.username}
                <input
                type="text" 
                name="text" 
                value={formData.text}
                onChange={handleInputChange}
                /> 
        </label>
        <button type="submit">Submit</button>
        </form>
     );
}
 
export default EditPost;