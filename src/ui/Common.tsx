import styled, { css } from "styled-components";
export const DivLine = styled.div`
  height: 1px;
  background-color: var(--dark-black);
  width: 100%;
  opacity: 0.15;
`;

export const StyledButtonSpan = styled.span`
  letter-spacing: 2px;
`;

export const StyledSection = styled.section<{ $alignItems: string }>`
  ${(props) => css`
    display: flex;
    flex-direction: column;
    align-items: ${props.$alignItems};
    gap: 2rem;
  `}
`;

export const StyledContainer = styled.div<{ $gap: string }>`
  ${(props) => css`
    gap: ${props.$gap};
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;
  padding-bottom: 5rem;
`;
