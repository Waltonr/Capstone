import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CreateRecommendation from "../CreateRecommendation/CreateRecommendation";
import "./recommendation.css"


const Recommendation = (props) => {
  const [user, token] = useAuth()
    const { recommends } = props
    const navigate = useNavigate()
    const refreshPage = () => {
      navigate(0);
    }
    async function deleteRecommend(recommend) {
      try {
        let response = await axios.delete("http://127.0.0.1:8000/api/recommendations/1/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        refreshPage()
      } catch (error) {
        console.log("error with deleting recommendation")
      }
    }

    return ( 
        <div>
          <div>
            <Link className="editlink" to="editrecommend">edit</Link>
          </div>
          <div className="recommend">
            <p>Location: {recommends.location}</p>
            <p>Housing: {recommends.housing}</p>
            <button className="delete" onClick={deleteRecommend}>Delete</button>
          </div>
      </div>
     );
}
 
export default Recommendation;