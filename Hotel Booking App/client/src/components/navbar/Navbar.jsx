import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const { user } = useContext(AuthContext);

  const handleClick = () => {
    if (user) {
      localStorage.removeItem("user");
      window.location.replace("/");
    }
  };

  const handleRegister = () => {
    window.location.replace("/register");
  };

  const handleLogin = () => {
    window.location.replace("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">HotelBooking</span>
        </Link>
        {user ? (
          (user.username,
          (
            <button className="navButton" onClick={handleClick}>
              Logout
            </button>
          ))
        ) : (
          <div className="navItems">
            <button className="navButton" onClick={handleRegister}>
              Register
            </button>
            <button className="navButton" onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
