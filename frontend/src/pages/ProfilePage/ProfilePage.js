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
        <div className="profile">
            <h2 className="profileuser">{user.username}</h2>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>INFORMATION</th>
                    <Link to="editinfo">edit</Link>
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
              <table className="table">
                <thead>
                  <tr>
                    <th>MY RECOMMEDENDATIONS</th>
                    <Link to="editrecommend">edit</Link>
                  </tr>
                </thead>
                <tbody>
                    {recommends &&
                          recommends.map((recommend, index) => (
                              <tr key={index}>
                                  <td>Location:</td>
                                  <td>{recommend.location}</td>
                              </tr>
                          ))}
                    {recommends &&
                          recommends.map((recommend, index) => (
                              <tr key={index}>
                                  <td>Housing:</td>
                                  <td>{recommend.housing}</td>
                              </tr>
                          ))}
                </tbody>
              </table>
            </div>
        </div>
     );
}
 
export default Profile;