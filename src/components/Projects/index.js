// Gallery from mod = projects in this project 

import React, {useState} from 'react';
import ProjectList from '../ProjectList';
import { SingularProject } from '../SingularProject';
// import { capitalizeFirstLetter } from '../../utils/helpers';
import book from "../../assets/images/book.png"

function Projects(props) {
 const [arrOfProjects] = useState([
    {
        projectName: "Joe",
        projectScreenie: book
    },
    {
        projectName: "Deez",
        projectScreenie: book
    },
    {
        projectName: "Ligma",
        projectScreenie: book
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
