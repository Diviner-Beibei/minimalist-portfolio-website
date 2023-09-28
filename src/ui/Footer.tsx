import styled from "styled-components";

import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MipLinks from "./MipLinks";

const StyledFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  padding: 4.5rem 0;
  background-color: var(--dark-black);
  color: var(--color-white);
  margin-top: 3rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <Logo fillColor="#fff" />
      <NavLinks.Links />
      <MipLinks />
    </StyledFooter>
  );
}

export default Footer;
