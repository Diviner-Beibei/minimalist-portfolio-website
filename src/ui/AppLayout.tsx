import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { StyledContainer } from "./Common";

function AppLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <StyledContainer $gap="8rem">
          <Outlet />
        </StyledContainer>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default AppLayout;
