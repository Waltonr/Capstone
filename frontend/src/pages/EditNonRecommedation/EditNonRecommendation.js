import React, {useState, useEffect} from "react";
import EditNonRecommendation from "../../components/EditNonRecommendation/EditNonRecommendation";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditNonRecommendationPage = (props) => {
    const [user, token] = useAuth();
    const [nonRecommend, setNonRecommend] = useState();
    const { id } = useParams();
    

    useEffect(() => {
        const getNonRecommend = async() => {
            try {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/non_recommendations/${id}/`,
                    {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    }
                );
                console.log(response.data)
                setNonRecommend(response.data)
            } catch (error) {
                console.log("error with get nonrecommend by id")
            }
        };
        getNonRecommend();
    }, [token])
    return ( 
        <EditNonRecommendation nonRecommend={nonRecommend}/>
     );
}
 
export default EditNonRecommendationPage;