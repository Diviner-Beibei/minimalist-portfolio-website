import React from "react";
import styled, { css } from "styled-components";

interface StyledParagraphProps {
  $ff?: string;
  $color?: string;
  $fs?: string;
  $fw?: number;
}

const StyledParagraph = styled.p<StyledParagraphProps>`
  ${(props) => css`
    ${props.$ff};
    font-family: var(${props.$ff});
    color: var(${props.$color});
    font-size: ${props.$fs};
    font-weight: ${props.$fw};
    line-height: 3rem;
  `}
`;

interface ParagraphProps {
  fontFamily?: string;
  textColor?: string;
  fontSize?: string;
  fontWeight?: number;
  children: React.ReactNode;
}

function Paragraph({
  fontFamily,
  textColor,
  fontSize,
  fontWeight,
  children,
}: ParagraphProps) {
  return (
    <StyledParagraph
      $ff={fontFamily ? fontFamily : "--font-ps"}
      $color={textColor ? textColor : "--dark-black"}
      $fs={fontSize ? fontSize : "1.6rem"}
      $fw={fontWeight ? fontWeight : 400}
    >
      {children}
    </StyledParagraph>
  );
}

export default Paragraph;
