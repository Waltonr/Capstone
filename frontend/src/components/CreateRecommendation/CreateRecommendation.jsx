import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";

let initvalues = {
    location: "",
    housing: "",
    user_id: ""
}

const CreateRecommendation = (props) => {
    const [user, token] = useAuth();
    const [formData, handleInputChange] = useCustomForm(initvalues, newRecommend);
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate(0);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        newRecommend(formData);
      };

    async function newRecommend() {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/recommendations/",
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            console.log(response.data)
            refreshPage();
        } catch (error) {
            console.log("error with creating recommendation")
            
        }
    }
    return (
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
                <button type='submit'>Add</button>
            </div>
        </form>
     );
}
 
export default CreateRecommendation;