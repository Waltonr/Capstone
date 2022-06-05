import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = (props) => {

    const [user, token] = useAuth();
    const [recommends, setAllRecommends] = useState([]);
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
        getInformation();
      }, [token]);


    return (
        <div className="form-control">
            <h2>Profile Page for {user.username}</h2>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>INFORMATION</th>
                    <Link to="profile/editinfo">edit</Link>
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
            <div>
                {recommends &&
                    recommends.map((recommendation) => (
                        <p key={recommendation.id}>
                            {recommendation.location} {recommendation.housing}
                        </p>
                    ))}
            </div>
        </div>
     );
}
 
export default Profile;