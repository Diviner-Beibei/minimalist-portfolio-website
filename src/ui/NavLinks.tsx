import styled from "styled-components";

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const StyledNavLink = styled.li`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: var(--font-ps);
  letter-spacing: 0.2rem;
  font-weight: 400;
`;

function NavLinks() {
  // function handleClickMenu(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  //   console.log(e.target);
  // }

  return (
    <StyledNavLinks>
      <StyledNavLink>Home</StyledNavLink>
      <StyledNavLink>Portfolio</StyledNavLink>
      <StyledNavLink>Contact Me</StyledNavLink>
    </StyledNavLinks>
  );
}

export default NavLinks;
