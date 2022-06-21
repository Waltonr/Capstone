import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const MemberName = (props) => {
    const { id } = props
    const [memberName, setMemberName] = useState(getMemberName(), [""]);
    const [user, token] = useAuth();

    async function getMemberName() {
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
      console.log("error with getting user's name")
      }
    };

    return ( 
        <div>
            {memberName}
        </div>
     );
}
 
export default MemberName;