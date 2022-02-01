import React from "react"
import styled from "styled-components"
import Picture from "./Picture"
import { media, typography } from "../../utils"
import github from "../../images/github64.png"
const Container = styled.div`
  //border: 2px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  font-style: normal;
  width: 100%;
  margin-bottom: 100px;
  ${media.tablet`
  width: 95%;
  `} //margin: 1% 0;
  ${media.desktop`
  width: 100%;
  padding-top: 60px;
  `} //margin: 1% 0;
`
const Containermirror = styled.div`
  //border: 2px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
  font-style: normal;
  flex-direction: column-reverse;
  width: 95%;
  margin-bottom: 100px;
  ${media.tablet`
  width: 95%;
  
  `}
  ${media.desktop`
  width: 100%;
  padding-top: 60px;
  flex-direction: row;
  `}
`
const TextB = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  margin: 30px 0px;
  font-weight: 400;
  font-size: ${typography.h4};
  ${media.desktop`
  font-weight: 300;
  font-size: ${typography.h3};
  margin: 40px 0px;
  `}
`
const Text = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-weight: 400;
  font-size: ${typography.h5};
  ${media.desktop`
  width: 40%;
  font-weight: 300;
  font-size: ${typography.h4};
  `}//margin: 1% 0;
`
const TextSm = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  font-size: ${typography.h6};
  font-weight: 400;
  margin-bottom: 15px;
  font-weight: 400;
  ${media.desktop`
  font-weight: 300;
  `}
`
const Pic = styled.div`
  //background-color: black;
  //border: 1px solid red; /* BORDER TEST*/
  //margin: 20px;
  width: 100%;
  ${media.desktop`
  width: 50%;
  margin: 0;
  `}
`

const Tech = styled.div`
  width: 45%;
  height: 60px;
  //min-width: 290px;
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  align-items: center;
  font-size: ${typography.h6};
  font-style: normal;
  min-width: 190px;

  ${media.phone`
  width: 40%;
  font-size: ${typography.h6};
  `}
  ${media.tablet`
  width: 50%;
  
  //font-weight: 400;
  font-size: ${typography.h6};
  `}
`
const TechContainer = styled.div`
  width: 100%;
  min-height: 130px;
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
  //border: 1px solid red; /* BORDER TEST*/
  margin: 0;
  ${media.tablet`
  width: 30px;
  height: 30px;
  `}
`
const IconText = styled.div`
  width: 50%;
  margin-left: 10px;
  //border: 1px solid red; /* BORDER TEST*/
`

const ButtonContainer = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`
const Button = styled.a`
  display: flex;
  text-decoration: none; /* no underline */
  color: black;
  justify-content: center;
  align-items: center;
  font-size: ${typography.h6};
  margin-top: 2%;
  font-weight: 500;
  letter-spacing: 1px;
  //padding: 13px 50px 13px;
  width: 150px;
  height: 55px;
  outline: 0;
  border: 3px solid black;
  border-radius: 7px;
  cursor: pointer;
  position: relative;
  background-color: white;
  ::after {
    content: "";
    background-color: black;
    border-radius: 7px;
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 7px;
    right: 7px;
    transition: 0.3s;
  }
  :hover::after {
    top: -7px;
    right: -7px;
  }
  ${media.desktop`
  margin-top: 2%;
  font-weight: 400;
  `}
`
const Img = styled.img`
  height: 40px;
  width: 40px;
  padding: 0;
  margin: 0;
`

export default function Site(prop) {
  const num = prop.tech
  if (prop.mirror) {
    return (
      <Containermirror>
        <Text>
          <TextB>{prop.title}</TextB>
          <TextSm>{prop.children}</TextSm>
          <TechContainer>
            {num.map(p => (
              <Tech key={p[0]}>
                <Icon src={p[1]} />

                <IconText>{p[0]}</IconText>
              </Tech>
            ))}
          </TechContainer>
          <ButtonContainer>
            <Button href={prop.live} target="_blank">
              Live
            </Button>
            <Button href={prop.github} target="_blank">
              <Img src={github}></Img>
            </Button>
          </ButtonContainer>
        </Text>{" "}
        <Pic>
          <Picture img={prop.img} live={prop.live} />
        </Pic>
      </Containermirror>
    )
  } else
    return (
      <Container>
        <Pic>
          <Picture img={prop.img} live={prop.live} />
        </Pic>
        <Text>
          <TextB>{prop.title}</TextB>
          <TextSm>{prop.children}</TextSm>
          <TechContainer>
            {num.map(p => (
              <Tech key={p[0]}>
                <Icon src={p[1]} />

                <IconText>{p[0]}</IconText>
              </Tech>
            ))}
          </TechContainer>
          <ButtonContainer>
            <Button href={prop.live} target="_blank">
              Live
            </Button>
            <Button href={prop.github} target="_blank">
              <Img src={github}></Img>
            </Button>
          </ButtonContainer>
        </Text>
      </Container>
    )
}
