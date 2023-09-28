import styled, { css } from "styled-components";

const Block = styled.div<{ $blockName: string }>`
  ${(props) =>
    props.$blockName === "bla1" &&
    css`
      padding-right: 5px;
      gap: 2rem;
    `}
  ${(props) =>
    props.$blockName === "bla2" &&
    css`
      align-items: center;
      padding: 0 2rem;
      gap: 3rem;
    `}
    display: flex;
  flex-direction: column;
`;

export default Block;
