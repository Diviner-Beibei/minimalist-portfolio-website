import styled from "styled-components";

const Button = styled.button`
  font-family: "Public Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  // padding: 1rem 3rem;
`;

const DarkBlueButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  background-color: var(--color--dark-green);
  color: var(--color-white);
  align-self: start;
  width: 20rem;
  padding: 1.5rem 2rem;
  border: none;
`;

const WhiteButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color--dark-green);
  // border: solid;
  border-width: 1px;
  border-color: var(--dark-black);
  padding: 1.3rem 2rem;
  width: 202px;
`;

export { DarkBlueButton, WhiteButton };
