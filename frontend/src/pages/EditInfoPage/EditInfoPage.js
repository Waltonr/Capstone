import React from "react"
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import useCustomForm from "../../hooks/useCustomForm"

let initvalues = {
    age: 0,
    about: ""
}

const EditInfo = (props) => {
    const [user, token] = useAuth()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initvalues, editInformation)

    async function editInformation() {
        try {
            let response = await axios.put("http://127.0.0.1:8000/api/information/1",
            formData,
            {
                headers: {
                    Authorization: "Bearer " + token
                }
            }
            );
        } catch (error) {
            console.log("error with editing info")
            
        }
    }

    return ( 
        <div>
            <h2>Edit Info Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Information
                    </label>
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
     );
}
 
export default EditInfo;