import { useNavigate } from "react-router-dom";

import { WhiteButton } from "./Button";
import { StyledButtonSpan } from "./Common";
import React from "react";

interface LinkButtonProps {
  children: React.ReactNode;
  to: string;
}

function LinkButton({ children, to }: LinkButtonProps) {
  const navigate = useNavigate();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    console.log(e);
    navigate(to);
  }

  return (
    // <NavLink to={to}>
    <WhiteButton onClick={handleClick}>
      <StyledButtonSpan>{children}</StyledButtonSpan>
    </WhiteButton>
    // </NavLink>
  );
}

export default LinkButton;
