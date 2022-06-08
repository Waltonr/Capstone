import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Recommendation = (props) => {
    const { recommends } = props
    const navigate = useNavigate()
    const refreshPage = () => {
      navigate(0);
    }
    async function deleteRecommend() {
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
          <Link  to="addrecommend"></Link>
          <Link to="editrecommend">edit</Link>
        </div>
        <div>
            {recommends.location}
        </div>
        <div>
            {recommends.housing}
        </div>
        <button onClick={deleteRecommend}>Delete</button>
      </div>
     );
}
 
export default Recommendation;