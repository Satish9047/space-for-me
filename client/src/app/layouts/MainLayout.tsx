import { Outlet } from "react-router";
import Container from "../../shared/components/Container";
import Navbar from "../../shared/components/Navbar";
import Footer from "../../shared/components/Footer";
const MainLayout = () => {
  return (
    <>
      <Container>
        <Navbar />
      </Container>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
