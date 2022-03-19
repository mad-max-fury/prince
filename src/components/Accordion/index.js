import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "../../colors";
import MinCard from "../experienceCard";

const Accordion = ({ heading, accordingContentFor }) => {
  const [Open, setOpen] = useState(false);
  return (
    <AccordionWrapper>
      <AccordionHeader onClick={() => setOpen(!Open)}>
        <TextHeading>{heading}</TextHeading>
        <HeadingIcon>
          <img
            src={Open ? `images/iconDown.png` : `images/iconLeft.png`}
            alt="icon"
          />
        </HeadingIcon>
      </AccordionHeader>
      <AccordionContent active={Open}>
        {accordingContentFor === "summary" ? (
          <>
            <p>
              Meeting up with solving real time problems has always been my
              desire, I do this by empathizing with prospects and making sure
              their end users are satisfied. I'm a student intern with Genesys
              Tech Hub where I learn how to create amazing and stunning User
              interfaces to solve users problems.
            </p>
            <p>
              In my free time I also play around some other things like Graphic
              Design, Optimized Content Creation and Social Media Management.
            </p>
          </>
        ) : accordingContentFor === "experience" ? (
          <MiniCardWrapper>
            {[
              {
                role: "Product Designer  -  Intern",
                location: "Genesys Tech Hub.",
                date: "May 2021 - Present",
                icon: "images/GenesysLogo.png",
              },
              {
                role: "Product Designer - Contract ",
                location: "Monaly",
                date: "Dec. 2021 - Feb. 2022",
                icon: "images/De.png",
              },
              {
                role: "Product Designer - Contract ",
                location: "Ripples.",
                date: "Jan. 2021 - Feb. 2022",
                icon: "images/Ripple.png",
              },
              {
                role: "Chief Executive Officer",
                location: "Wizzster Collections.",
                date: "June 2018 - 2020",
                icon: "images/barsSlate.png",
              },
              {
                role: "Chief Technology Officer ",
                location: "Funnel Hackers Academy",
                date: "Oct. 2020 - Jan. 2021",
                icon: "images/barsSlate.png",
              },
              {
                role: "Creative Lead ",
                location: "Business Rangers Academy",
                date: "Jan. 2019 - June. 2020",
                icon: "images/barsSlate.png",
              }
            ].map((a) => {
              return (
                <MinCard
                  role={a.role}
                  loc={a.location}
                  date={a.date}
                  icon={a.icon}
                />
              );
            })}
          </MiniCardWrapper>
        ) : accordingContentFor === "education" ? (
          <MiniCardWrapper>
            {[
              {
                role: "Electrical Electronics Engineering",
                location: "Akanu Ibiam Fed. Poly.",
                date: "2018 - 2020",
                icon: "images/Eduicon.png",
              },
              {
                role: "SSCE",
                location: "Evangel Seminary Aba",
                date: "2010 - 2016",
                icon: "images/Eduicon.png",
              },
              {
                role: "FLSC",
                location: "Amurie Primary School.",
                date: "2013",
                icon: "images/Eduicon.png",
              },
            ].map((a) => {
              return (
                <MinCard
                  role={a.role}
                  loc={a.location}
                  date={a.date}
                  icon={a.icon}
                />
              );
            })}
          </MiniCardWrapper>
        ) : accordingContentFor === "l&c" ? (
          <MiniCardWrapper>
            {[
              {
                role: "Introduction to Design",
                location: "ProCreator - Digital Design Agency.",
                icon: "images/ProCreatorIcon.png",
              },
              {
                role: "Design Thinking and Innovation",
                location: "Udemy",
                icon: "images/UdemyIcon.png",
              },
              {
                role: "UI/UX Design",
                location: "Genesys Tech Hub.",
                icon: "images/GenesysLogo.png",
              },
            ].map((a) => {
              return (
                <MinCard
                  role={a.role}
                  loc={a.location}
                  icon={a.icon}
                />
              );
            })}
          </MiniCardWrapper>
        ) : (
          <MiniCardWrapperL>
            {[
              "Research",
              "User Experience Design",
              "Prototyping",
              "Graphic Design",
              "Graphic Design",
              "AGILE Scrum",
              "Teamwork",
              "Web Design",
            ].map((tab) => {
              return <TabText>{tab}</TabText>;
            })}
          </MiniCardWrapperL>
        )}
      </AccordionContent>
    </AccordionWrapper>
  );
};

export default Accordion;

const AccordionWrapper = styled.div`
  height: fit-content;
  border-radius: 10px;
  background: ${colors.general_bg};
`;
const AccordionHeader = styled.div`
display:flex;
align-items:center;
width:calc( 100% - 3rem);
justify-content:space-between;
// border:1px solid green;
padding:1rem 1.5rem;
border-radius:10px;
transition:all 0.4s ease;
    &:hover{
      cursor:pointer;
      background:grey;
      transition:all 0.4s ease;
    }
    }

`;
const TextHeading = styled.div`
  color: ${colors.white};
  font-size: 24px;
  font-weight: semi-bold;
`;
const HeadingIcon = styled.span``;
const AccordionContent = styled.div`
  display: flex;
  transition: all 0.4s ease;
  ${({ active }) =>
    active
      ? `
    transition:all 0.4s ease;
    flex-direction:column;
    gap:1rem;
    width:calc( 100% - 3rem);
    justify-content:space-between;
    padding:1rem 1.5rem;
    border-radius:10px;
    max-height:fit-content;
      & > p {
        color:#BDC2D4;
      }

`
      : `
    transition:all 0.4s cube-bezier(0,1,0,1);
    max-height:0;
    overflow:hidden;
`}
`;
const MiniCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, auto) );
  gap: 2rem;
`;
const MiniCardWrapperL = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 2rem;
`;
const TabText = styled.div`
  color: #bdc2d4;
  font-size: 16px;
  font-weight: semi-bold;
  background: ${colors.main_color};
  padding: 0.6rem 1rem;
  border-radius: 10px;
`;
