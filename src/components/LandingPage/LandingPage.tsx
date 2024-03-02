import Container from "./Container";
import Sidebar from "../SideBar/Sidebar";

const LandingPage = () => {
  return (
    <div className="fixed flex h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <div className=" w-full h-full bg-gray-100 overflow-auto">
        <Container>
          <div className="h-screen">a</div>
        </Container>
        <Container>
          <div className="h-screen">acC</div>
        </Container>
      </div>
    </div>
  );
};

export default LandingPage;
