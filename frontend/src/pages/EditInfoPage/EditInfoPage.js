import React from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCustomForm from "../../hooks/useCustomForm";
import "./EditInfo.css";

let initvalues = {
    age: 0,
    about: ""
}

const EditInfo = (props) => {
    const { id } = useParams();
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, editInformation)
    const navigate = useNavigate()

    async function editInformation() {
        try {
            let response = await axios.put(`http://127.0.0.1:8000/api/information/${id}/`,
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
            console.log("error with editing info")
            
        }
    }

    return ( 
        <div className="infoedit">
            <h3>Information</h3>
            <div className="infoform">
                <form onSubmit={handleSubmit}>
                    <div className="form">
                        <label>
                            Age:{""}
                            <input
                            type="text" 
                            name="age" 
                            value={formData.age}
                            onChange={handleInputChange}
                            />    
                        </label>
                        <label>
                            About:{""}
                            <input
                            type="text" 
                            name="about" 
                            value={formData.about}
                            onChange={handleInputChange}
                            />    
                        </label>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
     );
}
 
export default EditInfo;