import axios from "axios";
import { useNavigate } from "react-router-dom";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";

let initvalues = {
    location: "",
    housing: ""

}

const CreateNonRecommendation = (props) => {
    const [user, token] = useAuth()
    const [formData, handleSubmit, handleInputChange] = useCustomForm(initvalues, newNonRecommend)
    const navigate = useNavigate()

    async function newNonRecommend(post) {
        try {
            let response = await axios.post(
                "http://127.0.0.1:8000/api/non_recommendations/",
                formData,
                {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                }
            );
            console.log(response.data)
            navigate("/profile")
        } catch (error) {
            console.log("error with creating nonrecommendation")
            
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
                 />   
            </label>
            <label>
                Housing:{""}
                <input
                 type="text" 
                 name="housing" 
                 value={formData.housing}
                 onChange={handleInputChange}
                 />   
            </label>
            <button type='submit'>Add</button>
        </div>
    </form>
     );
}
 
export default CreateNonRecommendation;