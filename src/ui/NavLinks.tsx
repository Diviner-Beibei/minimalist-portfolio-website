import styled from "styled-components";
import { useState, createContext, useContext } from "react";
import { NavLink } from "react-router-dom";

const StyledNavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
`;

const StyledNavLink = styled(NavLink)`
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: var(--font-ps);
  letter-spacing: 0.2rem;
  font-weight: 400;
`;

const StyledNavBg = styled.div`
  background-color: var(--dark-black);
  color: var(--color-white);
  // padding: 2rem;
  width: 22.3rem;
  height: 18.6rem;
  position: absolute;
  top: 4rem;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledToggle = styled.div`
  position: relative;
`;

type ContextType = {
  isOpen: boolean;
  open: () => void;
  close: () => void;
};

const NavLinkContext = createContext<ContextType | null>(null);

interface NavLinksProps {
  children: React.ReactNode;
}

function NavLinks({ children }: NavLinksProps) {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <NavLinkContext.Provider value={{ isOpen, open, close }}>
      {children}
    </NavLinkContext.Provider>
  );
}

interface ToggleProps {
  children: React.ReactNode;
}

function Toggle({ children }: ToggleProps) {
  const context = useContext(NavLinkContext);
  if (!context) {
    return null;
  }
  const { isOpen, open, close } = context;

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    console.log(e);

    if (isOpen) {
      close();
      console.log("close");
    } else {
      open();
      console.log("open");
    }
  }

  return (
    <StyledToggle onClick={handleClick}>
      {isOpen ? (
        <img src="../icons/close.svg" alt="menu" />
      ) : (
        <img src="../icons/hamburger.svg" alt="menu" />
      )}

      {children}
    </StyledToggle>
  );
}

interface NavBgProps {
  children: React.ReactNode;
}

function NavBg({ children }: NavBgProps) {
  const context = useContext(NavLinkContext);
  if (!context) {
    return null;
  }
  const { isOpen } = context;
  if (!isOpen) return null;

  return <StyledNavBg>{children}</StyledNavBg>;
}

function Links() {
  return (
    <StyledNavLinks>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/portfolio">Portfolio</StyledNavLink>
      <StyledNavLink to="/contactme">Contact Me</StyledNavLink>
    </StyledNavLinks>
  );
}

NavLinks.Toggle = Toggle;
NavLinks.NavBg = NavBg;
NavLinks.Links = Links;

export default NavLinks;
