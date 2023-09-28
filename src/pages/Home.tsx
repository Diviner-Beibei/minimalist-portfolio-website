// import styled from "styled-components";

import { StyledButtonSpan, StyledSection } from "../ui/Common";

import Heading from "../ui/Heading";
import { DarkBlueButton } from "../ui/Button";
import Pictures from "../ui/Pictures";
import ProjectBlock from "../ui/ProjectBlock";
import ContactBlock from "../ui/ContactBlock";

//  justify-items: center;
// justify-content: center;

const projectInfo = {
  pic: "profile",
  title: "About Me",
  description: `I’m a junior front-end developer looking for a new role in an exciting
  company. I focus on writing accessible HTML, using modern CSS
  practices and writing clean JavaScript. When writing JavaScript code,
  I mostly use React, but I can adapt to whatever tools are required.
  I’m based in London, UK, but I’m happy working remotely and have
  experience in remote teams. When I’m not coding, you’ll find me
  outdoors. I love being out in nature whether that’s going for a walk,
  run or cycling. I’d love you to check out my work.`,
  btnContent: "GO TO PORTFOLIO",
  imgs: [
    "./homepage/mobile/image-homepage-profile.jpg",
    "./homepage/mobile/image-homepage-profile@2x.jpg",
  ],
  detailPics: [],
};

const heroImgs = [
  "./homepage/mobile/image-homepage-hero.jpg",
  "./homepage/mobile/image-homepage-hero@2x.jpg",
];

function Home() {
  return (
    <>
      <StyledSection $alignItems="start">
        <Pictures imgs={heroImgs} />

        <Heading $as="h1" $ff="irn">
          Hey, I’m Alex Spencer and I love building beautiful websites
        </Heading>

        <DarkBlueButton>
          <img src="./icons/down-arrows.svg" alt="down arrows" />
          <StyledButtonSpan>ABOUT ME</StyledButtonSpan>
        </DarkBlueButton>
      </StyledSection>

      <ProjectBlock info={projectInfo} />
      <ContactBlock />
    </>
  );
}

export default Home;
