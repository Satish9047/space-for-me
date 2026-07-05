import { Outlet } from "react-router";
import Container from "../../shared/components/Container";
import Navbar from "../../shared/components/Navbar";
const MainLayout = () => {
  return (
    <>
      <Container className="flex justify-between items-center p-4">
        <Navbar />
      </Container>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
