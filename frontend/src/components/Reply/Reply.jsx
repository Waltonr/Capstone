import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
const Reply = (props) => {
    const { reply } = props

    const [user, token] = useAuth() 
    const [likedButton, setLikedButton] = useState("inactive");
    const [dislikedButton, setDislikedButton] = useState("inactive");

  


    function handleClick() {
        if(likedButton === "inactive"){
          setLikedButton("liked")
          setDislikedButton("inactive")
        }
        else if (dislikedButton === "inactive"){
          setDislikedButton('disliked')
          setLikedButton("inactive")
        }
      }
    return ( 
      <div className="reply">
        <table>
          <tbody>
              <tr>
                  <td>
                      <p className="replytext">{user.username}:</p>
                      <p className="replytext">{reply.text}</p>
                  </td>
              </tr>
              <div>
              <button className={likedButton} onClick={handleClick}></button>
              <button className={dislikedButton} onClick={handleClick}></button>
              </div>
          </tbody>
        </table>
      </div>
     );
}
 
export default Reply;