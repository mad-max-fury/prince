import React from "react";
import { Fade, Zoom } from "react-reveal";
import styled from "styled-components";
import { colors } from "../../colors";
import ContactInnerPage from "../../containers/contactInner";
import Footer from "../../containers/footer";
import TopNavBar from "../../containers/navBar";
import PicHeaderWrapper from "../PicHeaderWrapper";
const DesignFlowContent = () => {
  return (
    <DesignFlowContentWrapper>
      <Zoom>
        <FlowHero>
          <Banner>
            <img src="/images/banner1.png" alt="banner" />
          </Banner>
        </FlowHero>
        <UiTools>
          <ToolInfo>
            <div>
              <h3>My Role</h3>
              <span>UX Designer</span>
            </div>
            <div>
              <h3>Project Link</h3>
              <span>
                <a href="www.github.com">www.github.com</a>
              </span>
            </div>
            <div>
              <h3>Platforms</h3>
              <span>Mobile app, Web app.</span>
            </div>
          </ToolInfo>
        </UiTools>
      </Zoom>
      <Fade left>
        <DHeader>
          <div>
            <h1>Project Brief</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              maecenas tristique urna facilisi viverra. Maecenas commodo, orci
              justo sed pretium. Sit mattis tellus aliquam est neque ridiculus
              amet. Fames sit non ut id ornare pellentesque ultricies cursus
              ipsum. Sagittis tempus ipsum turpis facilisi massa amet. Interdum
              semper cursus eget viverra mi vitae tristique ut ac. Euismod proin
              lacinia laoreet arcu diam bibendum. Diam nunc amet, duis neque,
              luctus in quis quis. Pellentesque a ligula dignissim lectus lectus
              nunc.
            </p>
          </div>
        </DHeader>
        <DHeader style={{ marginTop: "1rem" }}>
          <div>
            <h1>Problem Statement</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              maecenas tristique urna facilisi viverra. Maecenas commodo, orci
              justo sed pretium. Sit mattis tellus aliquam est neque ridiculus
              amet.
            </p>
          </div>
          <ol>
            <li>Velit maecenas tristique urna facilisi viverra.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              maecenas tristique urna facilisi viverra.
            </li>
            <li>maecenas tristique urna facilisi viverra</li>
            <li>aliquam est neque ridiculus amet.</li>
          </ol>
        </DHeader>

        <PicHeaderWrapper
          heading={"User Research"}
          imgSrc="/images/UserFlow.png"
        />
        <DHeader style={{ marginTop: "1rem" }}>
          <div>
            <h1>Ideation</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              maecenas tristique urna facilisi viverra. Maecenas commodo, orci
              justo sed pretium. Sit mattis tellus aliquam est neque ridiculus
              amet.
            </p>
          </div>
          <ol>
            <li>Velit maecenas tristique urna facilisi viverra.</li>
            <li>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit
              maecenas tristique urna facilisi viverra.
            </li>
            <li>maecenas tristique urna facilisi viverra</li>
            <li>aliquam est neque ridiculus amet.</li>
          </ol>
        </DHeader>
      </Fade>
      <Fade right>
        <PicHeaderWrapper
          heading={"UserFlow"}
          imgSrc="/images/UserFlow2.png"
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit maecenas tristique urna facilisi viverra. Maecenas commodo, orci justo sed pretium. Sit mattis tellus aliquam est neque ridiculus amet."
          }
        />

        <PicHeaderWrapper
          heading={"WireFrame"}
          imgSrc="/images/wireFrame.png"
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit maecenas tristique urna facilisi viverra. Maecenas commodo, orci justo sed pretium. Sit mattis tellus aliquam est neque ridiculus amet."
          }
        />

        <PicHeaderWrapper
          heading={"Low fidelity Mockups"}
          height={"fit-content"}
          imgSrc="/images/lfMockup.png"
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit maecenas tristique urna facilisi viverra. Maecenas commodo, orci justo sed pretium. Sit mattis tellus aliquam est neque ridiculus amet."
          }
        />

        <PicHeaderWrapper
          heading={"Final Solution/ High Fidelity Mockup"}
          imgSrc="/images/fS.png"
          height={"fit-content"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit maecenas tristique urna facilisi viverra. Maecenas commodo, orci justo sed pretium. Sit mattis tellus aliquam est neque ridiculus amet."
          }
        />

        <PicHeaderWrapper
          heading={"Prototype Interactions"}
          vidSrc="https://www.youtube.com/watch?v=JE-EsLhmlkU"
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit maecenas tristique urna facilisi viverra. Maecenas commodo, orci justo sed pretium. Sit mattis tellus aliquam est neque ridiculus amet."
          }
        />
      </Fade>
      <Fade bottom>
        <ContactInnerPage />

        <MoreProjects>
          <div>
            <span>
              <h3>See more of my works below</h3>
            </span>
            <div>
              <img src="/images/UI.png" alt="product" />
              <img src="/images/UI2.png" alt="product-1" />
            </div>
          </div>
        </MoreProjects>
      </Fade>
    </DesignFlowContentWrapper>
  );
};

export default DesignFlowContent;

const DesignFlowContentWrapper = styled.main`
  color: ${colors.white};
  display: flex;
  flex-flow: column;
  gap: 1.5rem;
  // width:100vw;
  z-index: 10 !important;
  background: ${colors.general_bg};
`;
const FlowHero = styled.div`
  // border:1px solid green;
  height: 92vh;
  @media screen and (max-width: 768px) {
    height: fit-content;
  }
`;
const UiTools = styled.div`
  height: 7rem;
  width: 100%;
  margin-bottom: 2rem;
  background: ${colors.main_color};
  @media screen and (max-width: 768px) {
    height: fit-content;
    padding: 1.5rem 0;
  }
`;
const ToolInfo = styled.div`
  height: 100%;
  // border:1px solid red;
  max-width: 80%;
  margin: auto;
  display: flex;
  align-items: center;
  // justify-content:space-between;
  gap: 25%;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > h3 {
      color: ${colors.white};
      font-size: 18px;
      font-weight: 600;
    }
    & > span {
      a {
        color: ${colors.grey_text};
        text-decoration: none;
      }
      font-size: 14px;
      color: ${colors.grey_text};
    }
  }
  @media screen and (max-width: 768px) {
    height: fit-content;
    gap: 2rem;
    flex-flow: column;
    align-items: start;
  }
`;
const Banner = styled.div`
  max-width: 80%;
  height: 80vh;
  margin: auto;
  @media screen and (max-width: 768px) {
    height: 30vh;
  }
  & > img {
    // border:1px solid red;
    width: 100%;
    height: 100%;
  }
`;
const DHeader = styled.div`
  max-width: 80%;
  margin: 0 auto;
  // border:1px solid green;
  display: flex;
  gap: 1rem;
  flex-flow: column;
  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    & > h1 {
      font-size: 24px;
      color: ${colors.white};
      line-height: 324x;
    }
    & > P {
      color: ${colors.grey_text};
      line-height: 30px;
      @media screen and (max-width: 768px) {
        font-size: 15px;
      }
    }
  }
  & > ol {
    width: 95%;
    // border:1px solid red;
    padding-left: 1rem;
    display: flex;
    flex-flow: column;
    color: ${colors.grey_text};
    gap: 0.5rem;
  }
`;
const MoreProjects = styled.div`
  width: 100%;
  height: fit-content;
  background: ${colors.main_color};
  padding: 1.5rem 0;
  display: flex;
  align-items: start;

  flex-flow: column;
  & + div {
    margin-top: -1.2rem;
  }

  & > div {
    width: 80%;
    margin: auto;
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
    span > h3 {
      color: ${colors.white};
    }
    & > div {
      height: 50vh;
      display: flex;
      width: 100%;
      @media screen and (max-width: 768px) {
        flex-flow: column;
        height: fit-content;
      }
      & > img {
        width: 50%;
        @media screen and (max-width: 768px) {
          width: 100%;
        }
      }
    }
  }
`;
