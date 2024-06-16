// import React from "react";

// function Header() {
//   return (
//     <div className="header">
//       <div className="ladha">
//         <h1>Ladha</h1>
//       </div>
//       <div className="nav-bar">
//         <a href="#home">Home</a>
//         <a href="#about">About Us</a>
//         <a href="#contacts">Contacts</a>
//       </div>
//     </div>
//   );
// }

// export default Header;

// PART 2
import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="ladha">
        <h1>Ladha</h1>
      </div>
      <div className="nav-bar">
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
        <a href="#about-us">About Us</a>
        <a href="#contact-us">Contact Us</a>
      </div>
    </div>
  );
}

export default Header;
