import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/118 - assignment.png";
import projImg2 from "../assets/img/128 - challenge - flash cards.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Cards from './Cards'

export const Projects = () => {

  const projects = [
    {
      title: "Far Away",
      description: "Trips Management",
      imgUrl: projImg1,
    },
    {
      title: "Flash Cards",
      description: "Cilck on card and it will change color and text",
      imgUrl: projImg2,
    },
    {
      title: "Iphone weather App",
      description: "Live Iphone Type Weather App",
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9rO_b5nF-HmpAmwgKqFfrBgpcaZTGmjZCMw&s',
    },
    {
      title: "Forkify",
      description: "1000 of recipe",
      imgUrl: 'https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/000/869/334/datas/original.jpg',
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here is some of my projects. These all projects are prepared using different front eng languages like: HTML, CSS, JavaScript, ReactJs, NextJs and Fire Base. Some application are prepare by API fetching</p>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
              <Cards />  
      </Container>
    
    </section>
  )
}