import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

//   About Me, Portfolio, Contact, and Resume should be on the nav bar
  return (
    // not sure if i neeed className or what it is and wont center 
    <header style={{justifyContent: 'center'}}  className="flex-column px-7">

    {/* not centering**********************  */}
      <h2 style={{justifyContent: 'center'}} >
        {/* href / underlines word   */}
        <a style={{color:'green' }}  data-testid="link" href="/">
          <span role="img"  aria-label="camera"> </span> E TECHNOLOGIES
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a style={{color:'green'}}  data-testid="about" href="#about" onClick={() => props.setCurrentPage("about")}>
              What we do
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.setCurrentPage("contact")}>
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.setCurrentPage("projects")}>
              Projects
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.setCurrentPage("photos")}>
              Photos
            </a>
          </li>
          {/* <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.setCurrentPage("projects")}>
              Resume
            </a>
          </li> */}
          
            
        </ul>
      </nav>
    </header>
  );
}

export default Nav;