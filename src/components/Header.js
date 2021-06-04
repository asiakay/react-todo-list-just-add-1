import React from "react";

/* // New Functional Component
has a div and H1 code and text. 
*/
const Header = (props) => {
  return (
    <div>
    <header>
      <h1 style={headerStyle}>{props.title}</h1>
    </header>
    </div>
    
  );
};

const headerStyle = {
  fontSize: "40px",
  textDecoration: "underline",
};

export default Header;
