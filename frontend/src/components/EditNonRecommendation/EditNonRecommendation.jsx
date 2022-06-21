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

const EditNonRecommendation = (props) => {
    const {nonRecommend} = props
    const [formData, handleInputChange] = useCustomForm(initialValues, editNonRecommend);
    const { id } = useParams();
    const [user, token] = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        editNonRecommend(formData);
      };

    
    async function editNonRecommend() {
        try {
            let response = await axios.put(
                `http://127.0.0.1:8000/api/non_recommendations/${nonRecommend.id}/`,
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
            console.log("error with editing non recommendation")
            
        }
    };

    
    



    return (
        <div className="nonrecommend">
            <h3>EDIT NON-RECOMMENDATION</h3>
            <form className="nonrecommendform" onSubmit={handleSubmit}>
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
                    <button type="submit">Edit</button>
                </div>
            </form>
        </div>
     );
}
 
export default EditNonRecommendation;