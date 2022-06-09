import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "./NonRecommendation.css"


const NonRecommendation = (props) => {
  const [user, token] = useAuth()
    const { nonrecommends } = props
    const navigate = useNavigate()
    const refreshPage = () => {
      navigate(0);
    }
    async function deleteNonRecommend(nonrecommend) {
      try {
        let response = await axios.delete("http://127.0.0.1:8000/api/nonrecommendations/1/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        refreshPage()
      } catch (error) {
        console.log("error with deleting nonrecommendation")
      }
    }

    return ( 
        <div>
          <div>
            <Link className="editlink" to="editrecommend">edit</Link>
          </div>
          <div className="nonrecommend">
            <p>Location: {nonrecommends.location}</p>
            <p>Housing: {nonrecommends.housing}</p>
            <button className="delete" onClick={deleteNonRecommend}>Delete</button>
          </div>
      </div>
     );
}
 
export default NonRecommendation;