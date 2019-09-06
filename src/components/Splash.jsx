import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import logo from "../assets/images/Logo.png";

function Splash() {
  var splashStyle = {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "30px",
    display: "block"
  };

  return (
    <div>
      <div>
        <img style={splashStyle} src={logo} />
      </div>
      <Link to="./menu"><button>Menu</button></Link>
      <Link to="./employees"><button>Employees Only</button></Link>
    </div>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string,
//   location: PropTypes.string,
//   issue: PropTypes.string
// };

export default Splash;