import React, {useState, useEffect} from "react";
import EditRecommendation from "../../components/EditRecommendation/EditRecommedation";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";

const EditRecommendationPage = (props) => {
    const [user, token] = useAuth();
    const [recommend, setRecommend] = useState();
    const { id } = useParams();
    

    useEffect(() => {
        const getRecommend = async() => {
            try {
                let response = await axios.get(
                    `http://127.0.0.1:8000/api/recommendations/${id}/`,
                    {
                        headers: {
                            Authorization: "Bearer " + token
                        }
                    }
                );
                console.log(response.data)
                setRecommend(response.data)
            } catch (error) {
                console.log("error with get recommend by id")
            }
        };
        getRecommend();
    }, [token])
    return (
        <EditRecommendation recommend={recommend} />
     );
}
 
export default EditRecommendationPage;
