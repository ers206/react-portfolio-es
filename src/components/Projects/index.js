// Gallery from mod = projects in this project 

import React, {useState} from 'react';
import ProjectList from '../ProjectList';
import { SingularProject } from '../SingularProject';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import book from "../../assets/images/book.png"
import booze from "../../assets/images/booze.png"
import portfolio from "../../assets/images/portfolio.png"
import regex from "../../assets/images/regex.png"
import scheduler from "../../assets/images/.png"

function Projects(props) {
 const [arrOfProjects] = useState([
    {
        projectName: "IReadIt",
        projectScreenie: book
    },
    {
        projectName: "Booze and Binge",
        projectScreenie: booze
    },
    {
        projectName: "Portfolio",
        projectScreenie: portfolio
    },
    {
        projectName: "Regex",
        projectScreenie: regex
    },
    {
        projectName: "Work day Scheduler",
        projectScreenie: scheduler
    },

 ])

  return (
    <section>
      {arrOfProjects.map(project => {
        return (
            <SingularProject projectName={project.projectName} projectScreenie={project.projectScreenie} />
        )
      })}
    </section>
  );
}
export default Projects;
