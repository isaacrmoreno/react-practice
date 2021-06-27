import React from "react";
import ticketsimage from "./../img/ticketsimage.jpg"

function Header(){
  return (
  <React.Fragment>
    <h1>Help Queue</h1>
    <img src={ticketsimage} alt="practice"/>
  </React.Fragment>
  );
}

export default Header;