import styled, { css } from "styled-components";

interface HeadingProps {
  $ff: string;
  $as: string;
  $textAlign?: string;
}

// const irn = "'Ibarra Real Nova', serif;";
// const ps = "'Public Sans', sans-serif;";

const Heading = styled.h1<HeadingProps>`
  ${(props) =>
    props.$as === "h1" &&
    css`
      font-family:${
        props.$ff === "irn" ? "var(--font-irn);" : "var(--font-ps);"
      }
      text-align:${props.$textAlign};
      font-size: 4rem;
      font-weight: 700;
      color: var(--dark-black);
      letter-spacing: -0.36px;
      line-height: 4.2rem;
    `}
`;
export default Heading;
