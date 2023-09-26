import styled, { css } from "styled-components";

const Block = styled.div<{ $blockName: string }>`
  ${(props) =>
    props.$blockName === "bla1" &&
    css`
      padding-right: 5px;
    `}
  ${(props) =>
    props.$blockName === "bla2" &&
    css`
      align-items: center;
      padding: 0 2rem;
    `}
    display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export default Block;
