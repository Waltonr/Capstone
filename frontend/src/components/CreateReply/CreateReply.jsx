import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";


let initvalues = {
    text: ""
}

const CreateReply = (props) => {
    const { postid } = props;
    const [user, token] = useAuth();
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, newReply);
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }

    async function newReply() {
        try {
            let response = await axios.post(`http://127.0.0.1:8000/api/replies/${postid}/`,
            formData,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            );
            console.log(response.data)
            refreshPage();
        } catch (error) {
            console.log("error with creating reply") 
        }
    }

    return ( 
        <form className="replyform" onSubmit={handleSubmit}>
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