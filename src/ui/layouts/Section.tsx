import styled, { css } from "styled-components";

const Section = styled.section<{ $alignItems: string }>`
  ${(props) => css`
    display: flex;
    flex-direction: column;
    align-items: ${props.$alignItems};
    gap: 2rem;
  `}
`;

export default Section;
