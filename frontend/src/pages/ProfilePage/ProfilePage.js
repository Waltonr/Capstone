import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Profile = (props) => {

    const [user, token] = useAuth();
    const [recommends, setAllRecommends] = useState([]);

    useEffect(() => {
        const getRecommendations = async () => {
          try {
            let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
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
        getRecommendations();
      }, [token]);


    return (
        <div>
            <h2>Profile Page for {user.username}</h2>
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