import React from "react"
import styled from "styled-components"
import image1 from "../../images/image1.png"
import Title from "../Title"
import Picture from "./Picture"
import Site from "./Site"

const Container = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  width: 100%;
`

export default function Projects() {
  return (
    <Container>
      <Title title="Projects">
        Bellow you can find most of my project. All of them got a live version
        and an open github repo
      </Title>
      <Site>
        <Picture img={image1} />
      </Site>
    </Container>
  )
}
