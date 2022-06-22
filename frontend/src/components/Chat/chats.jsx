import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Chat = (props) => {
    const [user, token] = useAuth();
    const [memberName, setMemberName] = useState([]);
    const { chat } = props;
    const { chatid } = props;
    const navigate = useNavigate();

    const getMemberName = async () => {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/auth/${chat.user_id}/`,
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
        <div>
            <button onClick={() => navigate(`/messages/${chatid}`)}>{memberName.username}</button>
        </div>
     );
}
 
export default Chat;