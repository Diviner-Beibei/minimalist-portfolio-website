import { StyledSection, StyledButtonSpan } from "./Common";
import Block from "../ui/layouts/Block";
import { WhiteButton } from "../ui/Button";
import Heading from "./Heading";

function ContactBlock() {
  return (
    <StyledSection $alignItems="center">
      <Block $blockName="bla2">
        <Heading $as="h1" $ff="irn" $textAlign="center">
          Interested in doing a project together?
        </Heading>
        <WhiteButton>
          <StyledButtonSpan>GO TO PORTFOLIO</StyledButtonSpan>
        </WhiteButton>
      </Block>
    </StyledSection>
  );
}

export default ContactBlock;
