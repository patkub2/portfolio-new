import React from "react"
import styled from "styled-components"

const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  //flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  //flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  min-height: 100px;
  width: 100%;
  margin-bottom: 50px;
`
const TextContainer = styled.div`
  // border: 1px solid green; /* BORDER TEST*/
  //border-left: 8px solid black; /* BORDER TEST*/
  //width: 80%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  font-weight: 300;
  font-size: 42px;
`
const TextB = styled.div`
  // border: 1px solid red; /* BORDER TEST*/
  margin-top: 2%;
  margin-left: 2%;
  display: flex;
  align-items: center;
  width: 100%;
  height: 26%;
  font-weight: 300;
  font-size: 54px;
`
const TextSm = styled.div`
  // border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 4%;
  margin-left: 2%;
  //height: 62%;
  font-weight: 300;
  font-size: 20px;
`
const Line = styled.div`
  border: 4px solid black; /* BORDER TEST*/
  border-radius: 10px;
  height: 120px;
`

export default function Title(prop) {
  return (
    <>
      <Container>
        <Line></Line>
        <TextContainer>
          <TextB>{prop.title}</TextB>
          <TextSm>{prop.children}</TextSm>
        </TextContainer>
      </Container>
    </>
  )
}
