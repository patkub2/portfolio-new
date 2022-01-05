import React from "react"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"
import emailIc from "../../images/contact/emailIc.png"
import facebookIc from "../../images/contact/facebookIc.png"
import githubIc from "../../images/contact/githubIc.png"
import linkedinIc from "../../images/contact/linkedinIc.png"
const Container = styled.div`
  a {
    text-decoration: none;
    width: 100%;
    color: black;
  }
  //border: 1px solid purple; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  ${media.tablet`
  
  justify-content: center;
  `}
  ${media.desktop`
  justify-content: flex-start;
  `}
`
const Element = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  margin: 10px 0;

  justify-content: flex-start;
`
const Img = styled.img`
  //border: 1px solid blue; /* BORDER TEST*/
  margin: 0;
`
const Text = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  margin-left: 1%;
`
const Title = styled.div`
  //border: 1px solid pink; /* BORDER TEST*/
  font-size: ${typography.h5};
`

const Desc = styled.div`
  //border: 1px solid orange; /* BORDER TEST*/
  font-size: ${typography.h65};
`

export default function Icons() {
  return (
    <>
      <Container>
        <a href="#">
          <Element>
            <Img src={emailIc}></Img>
            <Text>
              <Title>Email</Title>
              <Desc>My email - patrykkubala1999@gmail.com</Desc>
            </Text>
          </Element>
        </a>
        <a href="#">
          <Element>
            <Img src={linkedinIc}></Img>
            <Text>
              <Title>LinkedIn</Title>
              <Desc>There you can find some information about me</Desc>
            </Text>
          </Element>
        </a>
        <a href="#">
          <Element>
            <Img src={facebookIc}></Img>
            <Text>
              <Title>Facebook</Title>
              <Desc>If you prefer to contact me via private message</Desc>
            </Text>
          </Element>
        </a>
        <a href="#">
          <Element>
            <Img src={githubIc}></Img>
            <Text>
              <Title>Github</Title>
              <Desc>All my repositories are public. You can take a look </Desc>
            </Text>
          </Element>
        </a>
      </Container>
    </>
  )
}
