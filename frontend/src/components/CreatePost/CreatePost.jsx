import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


let initvalues = {
    text: "",
    likes: "",
    dislikes: "",
    user_id: ""
}


const CreatePost = (props) => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, newPost)

    async function newPost(post) {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/post/",
            formData,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
            );
            console.log(response.data)
        } catch (error) {
            console.log("error with creating post")
            
        }
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    I Want To Say:{""}
                    <input
                     type="text" 
                     name="text" 
                     value={formData.text}
                     onChange={handleInputChange}
                     className="forminput" 
                     />   
                </label>
            <button type='submit' onClick={handleSubmit}>Post</button>
            </div>
        </form>
     );
}
 
export default CreatePost;