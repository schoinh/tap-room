import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import logo from "../assets/images/Logo.png";

function Splash() {
  var headerStyle = {
    backgroundColor: "white"
  };

  var logoStyle = {
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: "30px",
    marginBottom: "30px",
    display: "block"
  };

  var buttonArea = {
    paddingTop: "70px",
  };

  var menuButtonStyle = {
    fontFamily: "Courgette, cursive",
    display: "block",
    color: "#b9e567",
    marginLeft: "auto",
    marginRight: "auto",
    borderWidth: "5px",
    borderColor: "#b9e567",
    padding: "20px",
    fontSize: "36px"
  };

  var employeeButtonStyle = {
    fontFamily: "Courgette, cursive",
    display: "block",
    color: "#b9e567",
    margin: "auto",
    borderWidth: "0px",
    padding: "20px",
    fontSize: "24px"
  };

  return (
    <div>
      <div style={headerStyle}>
        <img style={logoStyle} src={logo} />
      </div>
      <div style={buttonArea}>
        <p><Link to="./menu"><button style={menuButtonStyle}>View Our Menu</button></Link></p>
        <p><Link to="./employees"><button style={employeeButtonStyle}>Employees Only</button></Link></p>
      </div>
    </div>
  );
}

// Ticket.propTypes = {
//   names: PropTypes.string,
//   location: PropTypes.string,
//   issue: PropTypes.string
// };

export default Splash;