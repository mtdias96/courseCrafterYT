import styled from "styled-components";

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const BlurOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
  filter: blur(5px) brightness(50%);
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;