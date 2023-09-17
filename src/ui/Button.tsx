import styled from "styled-components";

const Button = styled.button`
  font-family: "Public Sans", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  // padding: 1rem 3rem;
  border: none;
`;

const DarkBlueButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  background-color: var(--color--dark-green);
  color: var(--color-white);
  align-self: start;
  width: 20rem;
  padding: 1.5rem 2rem;
`;

const WhiteButton = styled(Button)`
  background-color: var(--color-white);
  color: var(--color--dark-green);
`;

export { DarkBlueButton, WhiteButton };
