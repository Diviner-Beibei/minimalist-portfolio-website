import styled from "styled-components";

import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 3rem 3rem;
`;

function NavBar() {
  return (
    <div>
      <Navbar>
        <Logo />
        <NavLinks />
      </Navbar>
    </div>
  );
}

export default NavBar;
