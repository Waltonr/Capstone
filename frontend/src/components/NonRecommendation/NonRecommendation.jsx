import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./NonRecommendation.css"


const NonRecommendation = (props) => {
  const { nonRecommends } = props;
  const { nonRecommendId } = props;
  const [user, token] = useAuth();
  const navigate = useNavigate();
  const refreshPage = () => {
    navigate(0);
  }
  async function deleteNonRecommend() {
    try {
      let response = await axios.delete(`http://127.0.0.1:8000/api/non_recommendations/${nonRecommendId}/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      refreshPage();
    } catch (error) {
      console.log("error with deleting nonrecommendation")
    }
  }

  return ( 
      <div>
        <div>
          <button className="editlink" onClick={() => navigate(`/editnonrecommendation/${nonRecommendId}`)}>edit</button>
        </div>
        <div className="nonrecommend">
          <p>Location: {nonRecommends.location}</p>
          <p>Housing: {nonRecommends.housing}</p>
          <button className="delete" onClick={deleteNonRecommend}>Delete</button>
        </div>
    </div>
    );
}
 
export default NonRecommendation;