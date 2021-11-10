import React from "react"
import styled from "styled-components"
import { typography } from "../utils"
const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-style: normal;

  min-height: 100px;
  width: 100%;
  margin-bottom: 50px;
`
const TextContainer = styled.div`
  //border: 1px solid green; /* BORDER TEST*/

  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 300;
`
const TextB = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  margin-top: 2%;
  margin-left: 2%;
  display: flex;
  align-items: center;
  width: 100%;
  font-weight: 300;
  font-size: ${typography.h2};
`
const TextSm = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 4%;
  margin-left: 2%;
  font-weight: 300;

  font-size: ${typography.h6};
`
const Line = styled.div`
  border: 4px solid black; /* BORDER TEST*/
  border-radius: 10px;
  margin-left: 10px;
  height: 120px;
`

export default function Title(prop) {
  return (
    <Container>
      <Line></Line>
      <TextContainer>
        <TextB>{prop.title}</TextB>
        <TextSm>{prop.children}</TextSm>
      </TextContainer>
    </Container>
  )
}
