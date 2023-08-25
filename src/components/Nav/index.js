import React from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

//   About Me, Portfolio, Contact, and Resume should be on the nav bar
  return (
    <header className="flex-row px-1 ">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 💻</span> Eric Schweitzer Portfolio
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.setCurrentPage("about")}>
              About me
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
            <a data-testid="about" href="#about" onClick={() => props.setCurrentPage("projects")}>
              Photos
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="about" href="#about" onClick={() => props.setCurrentPage("projects")}>
              Resume
            </a>
          </li>
          
            
        </ul>
      </nav>
    </header>
  );
}

export default Nav;