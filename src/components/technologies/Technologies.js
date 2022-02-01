import React from "react"
import styled from "styled-components"
import Apps from "./Apps"
import Title from "../Title"
import BallAnimation from "./BallAnimation"
import { media } from "../../utils"
const Container = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const AppsContainer = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  width: 100%;
  ${media.desktop`
  min-width: 150px;
    width: 50%;
    max-width: 700px;
  `}
`

export default function Technologies() {
  return (
    <Container id="technologies">
      <Title title="Technologies">
        These are the technologies I work with currently or used in my past
        projects.
      </Title>
      <AppsContainer>
        <Apps>HTML</Apps>
        <Apps>Css</Apps>
        <Apps>Sass</Apps>
        <Apps>Mobile first</Apps>
        <Apps>JavaScript</Apps>
        <Apps>TypeScript</Apps>
        <Apps>React</Apps>
        <Apps>Rect Hooks</Apps>
        <Apps>Redux</Apps>
        <Apps>Gatsby</Apps>
        <Apps>GraphQL</Apps>
        <Apps>Axios</Apps>
        <Apps>Git</Apps>
        <Apps>Photoshop</Apps>
        <Apps>Figma</Apps>
        <Apps>Wordpress</Apps>
        <Apps>MongoDB</Apps>
        <Apps>NodeJS</Apps>
        <Apps>NPM</Apps>
        <Apps>MaterialUI</Apps>
        <Apps>formik</Apps>
        <Apps>GSAP</Apps>
        <Apps>Styled Comp</Apps>
        <Apps>Formik</Apps>
      </AppsContainer>
      <BallAnimation />
    </Container>
  )
}
