import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import "./CreatePost.css"


let initvalues = {
    text: "",
    likes: 0,
    dislikes: 0

}


const CreatePost = (props) => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, newPost)
    const navigate = useNavigate()
    const refreshPage = () => {
        navigate(0);
    }

    async function newPost(post) {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/post/",
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            console.log(response.data)
            refreshPage()
        } catch (error) {
            console.log("error with creating post")
            
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div className="cpdiv">
                <label>
                    I Want To Say:{""}
                    <input
                     type="text" 
                     name="text" 
                     value={formData.text}
                     onChange={handleInputChange}
                     className="cpforminput" 
                     />   
                </label>
                <button className="cpbutton" type='submit' onClick={handleSubmit}>Post</button>
            </div>
        </form>
     );
}
 
export default CreatePost;