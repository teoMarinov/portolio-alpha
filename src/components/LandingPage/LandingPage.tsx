import Container from "./Container";
import Sidebar from "../SideBar/Sidebar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Languages from "./Languages/Languages";
import Projects from "./Projects/Projects";
import ContactMe from "../ContactMe/ContactMe";

const LandingPage = () => {


  return (
    <div className="fixed flex h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <div className=" w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-400 to-purple-900 overflow-auto">
        <Container>
          <Home />
        </Container>
        <Container>
          <AboutMe />
        </Container>
        <Container>
          <Languages />
        </Container>
        <Container>
          <Projects />
        </Container>
        <Container>
          <ContactMe />
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
