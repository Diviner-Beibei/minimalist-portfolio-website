import styled from "styled-components";

import Heading from "../ui/Heading";
import { DarkBlueButton } from "../ui/Button";
import Pictures from "../ui/Pictures";

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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Span = styled.span`
  font-size: 1.2rem;
  font-family: var(--font-ps);
  font-weight: 400;
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
      <Section>
        <div>
          <Pictures
            img1="./homepage/mobile/image-homepage-hero.jpg"
            img2="./homepage/mobile/image-homepage-hero@2x.jpg"
          />
        </div>

        <div>
          <Heading $as="h1" $ff="irn">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </Heading>
        </div>
        <DarkBlueButton>
          <img src="./icons/down-arrows.svg" alt="down arrows" />
          <Span>ABOUT ME</Span>
        </DarkBlueButton>
      </Section>

      <Section>
        <div>
          <Pictures
            img1="./homepage/mobile/image-homepage-profile.jpg"
            img2="./homepage/mobile/image-homepage-profile@2x.jpg"
          />
        </div>
        <DivLine />
      </Section>
    </Container>
  );
}

export default Home;
