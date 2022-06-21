import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import MemberName from "../../components/MemberName/MemberName";
import CreateRecommendation from "../../components/CreateRecommendation/CreateRecommendation";
import DisplayRecommendation from "../../components/DisplayRecommedList/DisplayRecommendList";
import CreateNonRecommendation from "../../components/CreateNonRecommendation/CreateNonRecommendation";
import DisplayNonRemmendation from "../../components/DisplayNonRecommendList/DisplayNonRecommendList";
import "./ProfilePage.css"

const Profile = (props) => {
  const { id } = useParams();
  const [user, token] = useAuth();
  const [recommends, setAllRecommends] = useState([]);
  const [nonrecommends, setAllNonRecommends] = useState([]);
  const [info, setAllInfo] = useState([]);

  useEffect(() => {
    const getRecommendations = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/recommendations/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
        setAllRecommends(response.data);
      } catch (error) {
        console.log("error with get recommend list");
      }
    };
    const getNonRecommendations = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/non_recommendations/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
        setAllNonRecommends(response.data);
      } catch (error) {
        console.log("error with get nonrecommend list");
      }
    };
    const getInformation = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/information/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data)
        setAllInfo(response.data);
      } catch (error) {
        console.log("error with get info");
      }
    };
    getRecommendations();
    getNonRecommendations();
    getInformation();
  }, [token]);

  return (
      <div className="profile">
          <h3 className="profileuser"> {user.username}'s Profile</h3>
          <div>
            <table className="tableinfo">
              <thead>
                <tr>
                  <th>INFORMATION</th>
                  <Link className="editlink" to="editinfo" id={id}>edit</Link>
                </tr>
              </thead>
              <tbody>
                  {info &&
                        info.map((information, index) => (
                            <tr key={index}>
                                <td>Age:</td>
                                <td>{information.age}</td>
                            </tr>
                        ))}
                  {info &&
                        info.map((information, index) => (
                            <tr key={index}>
                                <td>About:</td>
                                <td>{information.about}</td>
                            </tr>
                        ))}
              </tbody>
            </table>
          </div>
          <div className="tables">
            <div className="table">
              <p className="p">My Recommendations !</p>
              <div>   
                <CreateRecommendation />
                <DisplayRecommendation getAllRecommendsProperty={recommends} />
              </div>
            </div>
            <div className="table">
              <div>
                <p className="p">My Non-Recommendations !</p>
                <CreateNonRecommendation />
                <DisplayNonRemmendation getAllNonRecommendsProperty={nonrecommends} />
              </div>
            </div>
          </div>

      </div>
    );
}
 
export default Profile;