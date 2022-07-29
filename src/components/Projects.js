import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Project1.png";
import projImg2 from "../assets/img/Project2.png";
import projImg3 from "../assets/img/Project-main.png";
import projImg4 from "../assets/img/Project).png";
import projImgc from "../assets/img/car.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chatting Application",
      description: "A chat application made using NodeJS, ExpressJS and React which allows multiple users to chat with each other in real time!",
      imgUrl: projImg3,
      projecturl: "https://heyy-chatt.herokuapp.com/",
    },
    {
      title: "My-Portfolio",
      description: "Portfolio website made using ReactJS, showing off my skills and interest in the field of development!",
      imgUrl: projImg4,
      projecturl: "#home",
    },
    {
      title: "Memory Game",
      description: "Fun play game made using ReactJS which counts the score of user!",
      imgUrl: projImg1,
      projecturl: "http://react-messi.herokuapp.com/",
    },
    {
      title: "Weather App",
      description: "Shows the real-time current weather of the place entered by the user using OpenWeatherMap API and made using ReactJS!",
      imgUrl: projImg2,
      projecturl: "http://weather-app-div.herokuapp.com/",
    },
    {
      title: "Overspeeding-Detection",
      description: "Project made using OpenCV library in Python, which helps us to identify the moving cars in a sample video and check if the car is overspeeding or not!",
      imgUrl: projImgc,
      projecturl: "https://github.com/Dcoder10M/overspeeding-detection",
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
  
                <br />
                <br />
                <br />
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                    {/* <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
