// import styled, { css } from "styled-components";

import Pictures from "./Pictures";
import Paragraph from "./Paragraph";
import Block from "./layouts/Block";
import Heading from "./Heading";
import { DivLine, StyledSection } from "./Common";
import LinkButton from "./LinkButton";

interface SectionProps {
  info: {
    title: string;
    description: string;
    btnContent: string;
    imgs: Array<string>;
    detailPics: Array<string>;
  };
  isDetail?: boolean;
}

// {
//   info: { pic: "", title: "", description: "", btnContent: "" },
//   isDetail: false,
// }

function ProjectBlock({ info, isDetail }: SectionProps) {
  console.log(info);
  if (!info) return null;

  return (
    <StyledSection $alignItems="start">
      <Pictures imgs={isDetail ? info.detailPics : info.imgs} />
      <Block $blockName="bla1">
        <DivLine style={{ marginBottom: "1rem" }} />
        <Heading $as="h1" $ff="irn">
          {info.title}
        </Heading>
        <Paragraph>{info.description}</Paragraph>
        {isDetail && (
          <Paragraph
            fontSize="1.3rem"
            fontWeight={700}
            textColor="--dark-green"
          >
            {"Interaction Design / Front End Development\nHTML / CSS / JS"}
          </Paragraph>
        )}
        <LinkButton to={`/portfolio/${info.title}`}>
          {info.btnContent}
        </LinkButton>
        <DivLine style={{ marginTop: "2rem" }} />
      </Block>
    </StyledSection>
  );
}

export default ProjectBlock;
