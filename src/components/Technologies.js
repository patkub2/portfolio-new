import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding-top: 72px;
  border: 1px solid red; /* BORDER TEST*/

  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
`

const Title = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  //border-left: 4px solid black; /* BORDER TEST*/
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 42px;
  margin-bottom: 20px;
`
const Text = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  //border-left: 4px solid black; /* BORDER TEST*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 42px;
  margin-bottom: 20px;
`
const TextSm = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  //border-left: 4px solid black; /* BORDER TEST*/
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 24px;
  margin-bottom: 20px;
`
const Line = styled.div`
  border: 4px solid black; /* BORDER TEST*/
  border-radius: 10px;
  height: 50px;
`

export default function Technologies() {
  return (
    <Container>
      <Title>
        <Line />{" "}
        <div>
          <Text>Technologies</Text>
          <TextSm>
            These are the technologies I work with currently or used in my past
            projects.
          </TextSm>
        </div>
      </Title>
    </Container>
  )
}
