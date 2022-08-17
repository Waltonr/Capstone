import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import CreateRecommendation from "../CreateRecommendation/CreateRecommendation";
import "./recommendation.css"


const Recommendation = (props) => {
  const { recommends } = props
  const { recommendId } = props
  const [user, token] = useAuth()
  const navigate = useNavigate()
  const refreshPage = () => {
    navigate(0);
  }
  async function deleteRecommend() {
    try {
      let response = await axios.delete(`http://127.0.0.1:8000/api/recommendations/${recommends}/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
      );
      console.log(response.data)
      refreshPage();
    } catch (error) {
      console.log("error with deleting recommendation")
    }
  }

  return ( 
      <div>
        <div>
          <Link className="editlink" to={`/editrecommendation/${recommendId}`}>edit</Link>
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