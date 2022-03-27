import styled from "styled-components";
import { colors } from "../../colors";

export const LandingPageWrapper = styled.main`
  max-width: 100%;
  margin: auto;
  height: calc(90vh);
  display: flex;
  background-size: cover;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  & > div:first-of-type {
    position: absolute;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    top: 0%;
    left: 0%;
    z-index: -2;
  }
  & > div.blurBg {
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    z-index: -2;
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
    padding-bottom: 0;
  }
`;
