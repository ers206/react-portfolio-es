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
// import password from "../../assets/images/password.png"
import cookies from "../../assets/images/cookies.png"

// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function UncontrolledExample() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default UncontrolledExample;


// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function CarouselFadeExample() {
//   return (
//     <Carousel fade>
//       <Carousel.Item>
//         <ExampleCarouselImage img src="book" text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselFadeExample;




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
        projectName: "Quick Cookies",
        projectScreenie: cookies,
        projectLink: 'https://boywondr84.github.io/mern-subscription/'
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



