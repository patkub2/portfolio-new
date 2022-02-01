import React from "react"
import styled from "styled-components"
import { media, typography } from "../../utils"
import Title from "../Title"
import Email from "./Email"
import Icons from "./Icons"
const Container = styled.div`
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
  width: 80%;
  justify-content: flex-start;
  `}
`
const Media = styled.div`
  //border: 1px solid red; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  ${media.tablet`
  width: 80%;
  justify-content: center;
  `}
  ${media.desktop`
  width: 48%;
  margin-left:2%;
  `}
`
const Form = styled.div`
  //border: 5px solid pink; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: ${typography.h6};
  ${media.tablet`
  width: 80%;
  justify-content: center;
  `}
  ${media.desktop`
  width: 48%;
  margin-right:2%;
  `}
`

export default function Contact() {
  return (
    <>
      {" "}
      <Title title="Contact">
        All informations and links can be found below. Feel free to contact me
      </Title>
      <Container id="emaile">
        <Form>
          <Email />
        </Form>
        <Media>
          <Icons />{" "}
        </Media>
      </Container>
    </>
  )
}
