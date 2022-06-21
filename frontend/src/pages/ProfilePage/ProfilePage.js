import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
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
  const [memberName, setMemberName] = useState([]);
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
    getNonRecommendations();
    getRecommendations();
  }, [token]);

  const getInformation = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/information/${id}/`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      console.log(response.data)
      setAllInfo(response.data);
    } catch (error) {
        if (axios.isCancel(error)) {
          return false;
        }
      console.log("error with get info");
    }
    return null;
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
      getInformation({cancelToken:source.token});
    return () => {
      source.cancel("axios request cancelled");
    }
  }, []);

  const getMemberName = async () => {
    try {
      let response = await axios.get(`http://127.0.0.1:8000/api/auth/${id}/`,
      {
        headers: {
          Authorization: "Bearer " + token
        }
      }
      );
      console.log(response.data)
      setMemberName(response.data);
    } catch (error) {
        if (axios.isCancel(error)) {
          return false;
        }
      console.log("error with getting user's name")
      }
    return null
  };

  useEffect(() => {
    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();
      getMemberName({cancelToken:source.token});
    return () => {
      source.cancel("axios request cancelled");
    }
  }, []);

  return (
      <div className="profile">
          <h3 className="profileuser"> {memberName.username}'s Profile</h3>
          <div>
            <table className="tableinfo">
              <thead>
                <tr>
                  <th>INFORMATION</th>
                  <Link className="editlink" to="editinfo" id={id}>update</Link>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <th>Age:</th>
                    <th>{info.age}</th>
                  </tr>
                  <tr>
                    <th>About:</th>
                    <th>{info.about}</th>
                  </tr>
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