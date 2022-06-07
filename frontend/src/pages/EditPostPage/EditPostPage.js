import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";

let initvalues = {
    text: ""
}

const EditPost = (props) => {
    const [user, token] = useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, editPost)

    async function editPost() {
        try {
            let response = await axios.put(
                "http://127.0.0.1:8000/api/post/1/",
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );
            console.log(response.data)
            navigate("/")
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
        <button type='submit'>Submit</button>
        </form>
     );
}
 
export default EditPost;