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
        projectScreenie: book,
        projectLink: 'https://immense-ravine-74376.herokuapp.com/'
        // https://immense-ravine-74376.herokuapp.com/
    },
    {
        projectName: "Booze and Binge",
        projectScreenie: booze,
        projectLink: 'https://oceanlatte.github.io/booze-n-binge/'
        //  https://oceanlatte.github.io/booze-n-binge/
    },
    {
        projectName: "Portfolio",
        projectScreenie: portfolio,
        projectLink: 'https://ers206.github.io/original-portfolio/'
        // https://ers206.github.io/original-portfolio/
    },
    {
        projectName: "Regex",
        projectScreenie: regex,
        projectLink: 'https://gist.github.com/ers206/62f0c1163936b99164de3cf426af9124'
        //https://gist.github.com/ers206/62f0c1163936b99164de3cf426af9124
    },
    {
        projectName: "Work day Scheduler",
        projectScreenie: scheduler,
        projectLink: 'https://ers206.github.io/daily-planner-eric/'
        //  https://ers206.github.io/daily-planner-eric/
    },
    {
        projectName: "Password Generator",
        projectScreenie: scheduler,
        projectLink: 'https://ers206.github.io/password-generator/'
       //https://ers206.github.io/password-generator/
    },
    

 ])

  return (
    <section>
      {arrOfProjects.map(project => {
        return (
            <SingularProject projectName={project.projectName} projectScreenie={project.projectScreenie} projectLink={project.projectLink} />
        )
      })}
    </section>
  );
}
export default Projects;



