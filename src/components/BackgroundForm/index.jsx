import PropTypes from "prop-types";
import {
  Background, BackgroundContainer, BlurOverlay, ContentWrapper,
} from "./styles";

import img from "../../assets/images/bg.jpg";

export default function BackgroundForm({ children }) {
  return (
    <BackgroundContainer>
      <Background>
        <BlurOverlay backgroundImage={img} />
        <ContentWrapper>
          {children}
        </ContentWrapper>


      </Background>
    </BackgroundContainer>
  );
}
BackgroundForm.propTypes = {
  children: PropTypes.node.isRequired,
};
