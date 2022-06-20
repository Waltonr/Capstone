import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import axios from "axios";

let initialValues = {
    loction: "",
    housing: "",
    user_id: ""
}

const EditRecommendation = (props) => {
    const {recommend} = props
    const [formData, handleInputChange] = useCustomForm(initialValues, editRecommend);
    const { id } = useParams();
    const [user, token] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        editRecommend(formData);
      };

    
    async function editRecommend() {
        try {
            let response = await axios.put(
                `http://127.0.0.1:8000/api/recommendations/${recommend.id}/`,
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
            );
            console.log(response.data)
            navigate(`/profile/${id}`)
        } catch (error) {
            console.log("error with editing recommendation")
            
        }
    };

    
    



    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Location:{""}
                        <input
                        type="text" 
                        name="location" 
                        value={formData.location}
                        onChange={handleInputChange}
                        user_id={user.user_id}
                        />   
                    </label>
                    <label>
                        Housing:{""}
                        <input
                        type="text" 
                        name="housing" 
                        value={formData.housing}
                        onChange={handleInputChange}
                        user_id={user.user_id}
                        />   
                    </label>
                </div>
            </form>
        </div>
     );
}
 
export default EditRecommendation;