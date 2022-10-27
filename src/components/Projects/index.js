// Gallery from mod = projects in this project 

import React, {useState} from 'react';
// import ProjectList from '../ProjectList';
import { SingularProject } from '../SingularProject';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import book from "../../assets/images/book.png"
import booze from "../../assets/images/booze.png"
import portfolio from "../../assets/images/portfolio.png"
import regex from "../../assets/images/regex.png"
import scheduler from "../../assets/images/scheduler.png"

function Projects(props) {
 const [arrOfProjects] = useState([
    {
        projectName: "IReadIt",
        projectScreenie: book
        // https://immense-ravine-74376.herokuapp.com/
    },
    {
        projectName: "Booze and Binge",
        projectScreenie: booze
        //  https://oceanlatte.github.io/booze-n-binge/
    },
    {
        projectName: "Portfolio",
        projectScreenie: portfolio
        // https://ers206.github.io/original-portfolio/
    },
    {
        projectName: "Regex",
        projectScreenie: regex
        //https://gist.github.com/ers206/62f0c1163936b99164de3cf426af9124
    },
    {
        projectName: "Work day Scheduler",
        projectScreenie: scheduler
        //  https://ers206.github.io/daily-planner-eric/
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



