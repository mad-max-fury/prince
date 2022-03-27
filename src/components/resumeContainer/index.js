import React from "react";
import styled from "styled-components";
import { colors } from "../../colors";
import Accordion from "../Accordion";
import ConnectBtn from "../ConnectBtn";
const ResumeContainer = () => {
  return (
    <ResumeContainerWrapper>
      <ProfileHeader>
        <Text>Resume</Text>
        <Profile>
          <ImageWrapper>
            <img src="images/princecurve.png" alt="prince" />
          </ImageWrapper>
          <p>Ugbuta Prince Chijioke</p>
          <CtaButton>
            <div>
              <a href="mailto:contact@princechijioke.com">
                <img src="images/ctaMessageicon.png" alt="ctaMessageicon" />
              </a>
            </div>
            <div>
              <a href="tel:+234-903-828-3447">
                <img src="images/ctaCallIcon.png" alt="ctaCallIcon" />
              </a>
            </div>
          </CtaButton>
        </Profile>
      </ProfileHeader>
      <InfoPage>
        <Accordion accordingContentFor={"summary"} heading="Summary" />
        <Accordion accordingContentFor={"experience"} heading="Experience" />
        <Accordion accordingContentFor={"education"} heading="Education" />
        <Accordion
          accordingContentFor={"l&c"}
          heading="Licences & Certifications"
        />
        <Accordion heading="Skills" />
      </InfoPage>
      <TalkToMeWrap>
        <div>
          <a href="mailto:contact@princechijioke.com">
            <ConnectBtn
              text={"Get In Touch"}
              Bgcolor={colors.secondary_color}
            />
          </a>
          <a download={"*/**"}>
            <ConnectBtn text={"Download Resume"} />
          </a>
        </div>
      </TalkToMeWrap>
    </ResumeContainerWrapper>
  );
};

export default ResumeContainer;

const TalkToMeWrap = styled.div`
  width: fit-content;
  height: fit-content;
  margin: auto;
  & > div {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    margin: auto;
  }
`;

const ResumeContainerWrapper = styled.div`
  width: 100%;
  height: fit-content;
  background: ${colors.main_color};
  padding-top: 1rem;
  padding-bottom: 2rem;
`;
const ProfileHeader = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  height: 65vh;
  width: fit-content;
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.div`
  color: #fff;
  background: ${colors.general_bg};
  border-radius: 5px;
  width: fit-content;
  padding: 0.5rem 1rem;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  & > p {
    color: ${colors.white};
    font-size: 20px;
  }
`;
const ImageWrapper = styled.div`
  height: 15rem;
  width: 15rem;
  border-radius: 50%;

  & > img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
`;
const CtaButton = styled.div`
  display: flex;
  gap: 1rem;

  & > div {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    background: ${colors.general_bg};
    & > a {
      height: fit-content;
      width: fit-content;
      margin: auto;
      & > img {
        margin: auto;
      }
    }
  }
`;
const InfoPage = styled.div`
  width: 70vw;
  height: fit-content;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
