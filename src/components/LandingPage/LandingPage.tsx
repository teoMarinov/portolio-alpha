import Container from "./Container";
import Sidebar from "../SideBar/Sidebar";
import Home from "./Home/Home";

const LandingPage = () => {
  return (
    <div className="fixed flex h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <div className=" w-full h-full bg-green-100 overflow-auto">
        <Container>
          <Home />
        </Container>
        <Container>
          <div className="h-screen">acC</div>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
