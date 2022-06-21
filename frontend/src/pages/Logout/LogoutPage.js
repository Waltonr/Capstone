import React from "react";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import farewellplane from "../../images/farewellplane.jpg"

const LogoutPage = (props) => {
    const { logoutUser, user } = useContext(AuthContext);
    return ( 
        <div className="logoutpage">            
            <div className="logoutdiv">
                <img src={farewellplane} alt="women waving buy to plane" height="500" width="570" />
                <div className="containerlogout">                    
                    <p>Untill Next Time...</p>
                    <button className="logout" onClick={logoutUser}>Logout</button>
                </div>
            </div>
        </div>
     );
}
 
export default LogoutPage;