import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const MemberName = (props) => {
  const { id } = useParams();
  const [memberName, setMemberName] = useState([]);
  const [user, token] = useAuth();

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
      console.log(memberName)
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
      <div>
          {memberName}
      </div>
    );
}
 
export default MemberName;