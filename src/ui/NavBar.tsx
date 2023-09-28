import styled from "styled-components";

import Logo from "./Logo";
// import NavLinks from "./NavLinks";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem;
`;

function NavBar() {
  function handleClickMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e.target);
  }

  return (
    <div>
      <Navbar>
        <Logo />
        <div onClick={handleClickMenu}>
          <img src="../icons/hamburger.svg" alt="" />
        </div>
        {/* <NavLinks /> */}
      </Navbar>
    </div>
  );
}

export default NavBar;
