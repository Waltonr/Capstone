import React from "react";
import { useContext } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import useAuth from "../../hooks/useAuth";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { id } = useParams();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b className="name">SOLO WOMEN TRAVELRS</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={() => navigate("/logout")}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
        <li>
          <button onClick={() => navigate("/socialfeed")}>Social Feed</button>
        </li>
        <li>
          <button onClick={() => navigate(`/profile/${user.id}`)}>Profile</button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
