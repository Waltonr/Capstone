import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


let initvalues = {
    text: ""
}

const CreatePost = (props) => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, newPost)

    async function newPost() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/post/",
            formData,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            );
        } catch (error) {
            console.log("error with creating post")
            
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Post:{""}
                    <input
                     type="text" 
                     name="text" 
                     value={formData.text}
                     onChange={handleInputChange}
                     />    
                </label>
            </div>
            <button type='submit'>Post</button>
        </form>
     );
}
 
export default CreatePost;