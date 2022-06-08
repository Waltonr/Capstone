import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


let initvalues = {
    text: ""
}

const CreateReply = (props) => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, newReply)

    async function newReply() {
        try {
            let response = await axios.post("http://127.0.0.1:8000/api/replies/",
            formData,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            );
        } catch (error) {
            console.log("error with creating reply")
            
        }
    }

    return ( 
        <form className="form" onSubmit={handleSubmit}>
            <div>
                <label>
                    Reply{""}
                    <input
                     type="text" 
                     name="text" 
                     value={formData.text}
                     onChange={handleInputChange}
                     className="forminput"
                     />    
                </label>
            </div>
            <button type='submit'>Reply</button>
        </form>
     );
}
 
export default CreateReply;