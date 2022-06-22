import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import DisplayChats from "../../components/DisplayChats/DisplayChats";


const DirectMessage = (props) => {
    const [user, token] = useAuth();
    const [chats, setAllChats] = useState([]);

    useEffect(() => {
        const getChats = async () => {
            try {
              let response = await axios.get("http://127.0.0.1:8000/api/chats/allchats/", {
                headers: {
                  Authorization: "Bearer " + token,
                },
              });
              console.log(response.data)
              setAllChats(response.data);
            } catch (error) {
              console.log("error with getting chats");
            }
          };
          getChats();
    }, [token])
    return ( 
        <div>
            <h2>DM PAGE</h2>
            <DisplayChats getAllChatsProperty={chats}/>
        </div>
     );
}
 
export default DirectMessage;