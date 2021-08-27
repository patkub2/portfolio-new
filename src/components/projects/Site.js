import React from "react"
import styled from "styled-components"
import Picture from "./Picture"

const Container = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  display: flex;
  justify-content: space-around;
  //align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  width: 100%;
  //min-height: 500px;
`
const TextB = styled.div`
  border: 1px solid red; /* BORDER TEST*/

  display: flex;
  align-items: center;
  width: 100%;
  height: 26%;
  font-weight: 300;
  font-size: 42px;
  //min-height: 100px;
`
const Pic = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  width: 45%;
`
const TextSm = styled.div`
  border: 1px solid red; /* BORDER TEST*/

  display: flex;
  align-items: center;
  height: 74%;
  //min-height: 200px;
  font-weight: 300;
  font-size: 20px;
`

export default function Site(prop) {
  return (
    <Container>
      <Pic>
        <Picture img={prop.img} />
      </Pic>
      <Pic>
        <TextB>{prop.title}</TextB>
        <TextSm>{prop.children}</TextSm>
      </Pic>
    </Container>
  )
}
