import React from "react";
import { Link } from "react-router-dom";
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

  var navArea = {
    paddingTop: "70px",
  };

  var menuLinkStyle = {
    fontFamily: "Courgette, cursive",
    color: "#b9e567",
    textAlign: "center",
    fontSize: "36px"
  };

  var employeeLinkStyle = {
    fontFamily: "Courgette, cursive",
    color: "#b9e567",
    textAlign: "center",
    fontSize: "24px"
  };

  return (
    <div>
      <div style={headerStyle}>
        <img style={logoStyle} src={logo} />
      </div>
      <div style={navArea}>
        <p style={menuLinkStyle}><Link to="./menu">View Our Menu</Link></p>
        <p style={employeeLinkStyle}><Link to="./employees">Employees Only</Link></p>
      </div>
    </div>
  );
}

export default Splash;