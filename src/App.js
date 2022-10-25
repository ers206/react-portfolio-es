// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import './App.css'
 
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState("about");

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage)
  }

  const renderItem = () => {
    if(currentPage === "about") {
      return <About />
    }
    else if (currentPage === "contact") {
      return <ContactForm />
    }else if (currentPage === "projects") {
      return <Projects />
    }
  }

  return (
    <div>
      <Nav
        setCurrentPage={handlePageChange}
        currentPage={currentPage}
      ></Nav>
      <main>
    {renderItem()}
      </main>
    </div>
  );
}

export default App;

