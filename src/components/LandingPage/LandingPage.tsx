import Container from "./Container";
import Sidebar from "../SideBar/Sidebar";

const LandingPage = () => {
  return (

    <div className="fixed flex h-screen w-screen overflow-x-hidden">
      <Sidebar />
      <Container>
        <div className="h-screen">a</div>
        <div className="h-screen">a</div>
      </Container>
    </div>
  );
};

export default LandingPage;
