import styled from "styled-components";

import Section from "../ui/layouts/Section";
import Block from "../ui/layouts/Block";
import Heading from "../ui/Heading";
import { DarkBlueButton, WhiteButton } from "../ui/Button";
import Pictures from "../ui/Pictures";
import Paragraph from "../ui/Paragraph";

//  justify-items: center;
// justify-content: center;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 3rem;

  gap: 8rem;
  padding-bottom: 5rem;
`;

const StyledButtonSpan = styled.span`
  letter-spacing: 2px;
`;

const DivLine = styled.div`
  height: 1px;
  background-color: var(--dark-black);
  width: 100%;
  opacity: 0.15;
`;

function Home() {
  return (
    <Container>
      <Section $alignItems="start">
        <div>
          <Pictures pic="hero" />
        </div>

        <div>
          <Heading $as="h1" $ff="irn">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </Heading>
        </div>
        <DarkBlueButton>
          <img src="./icons/down-arrows.svg" alt="down arrows" />
          <StyledButtonSpan>ABOUT ME</StyledButtonSpan>
        </DarkBlueButton>
      </Section>

      <Section $alignItems="start">
        <Pictures pic="profile" />
        <Block $blockName="bla1">
          <DivLine style={{ marginBottom: "1rem" }} />
          <Heading $as="h1" $ff="irn">
            About Me
          </Heading>
          <Paragraph>
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </Paragraph>
          <WhiteButton>
            <StyledButtonSpan>GO TO PORTFOLIO</StyledButtonSpan>
          </WhiteButton>
          <DivLine style={{ marginTop: "2rem" }} />
        </Block>
      </Section>

      <Section $alignItems="center">
        <Block $blockName="bla2">
          <Heading $as="h1" $ff="irn" $textAlign="center">
            Interested in doing a project together?
          </Heading>
          <WhiteButton>
            <StyledButtonSpan>GO TO PORTFOLIO</StyledButtonSpan>
          </WhiteButton>
        </Block>
      </Section>
    </Container>
  );
}

export default Home;
