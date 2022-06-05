import React from "react";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";

let initvalues = {
    text: ""
}

const EditPost = (props) => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, editPost)

    async function editPost() {
        try {
            let response = await axios.put("http://127.0.0.1:8000/api/post/1",
            formData,
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

    return ( 
        <div>
            <h2>Edit Post Page</h2>
            <form>
                <label>
                    {user.username}
                    <input
                    type="text" 
                    name="text" 
                    value={formData.age}
                    onChange={handleInputChange}
                    /> 
            </label>
            <button>Submit</button>
            </form>
        </div>

     );
}
 
export default EditPost;