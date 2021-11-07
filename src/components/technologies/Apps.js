import React from "react"
import styled from "styled-components"
import arrow from "../../images/arrow.svg"
import { colors, media, typography } from "../../utils"
const Container = styled.div`
  border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  //flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 45%;
  img {
    // border: 1px solid blue; /* BORDER TEST*/
    margin: 0;
    padding: 0;
    width: 50px;
  }
`

const TextSm = styled.div`
  border: 1px solid red; /* BORDER TEST*/

  display: flex;
  align-items: center;

  font-weight: 300;
  font-size: ${typography.h6};
`

export default function Apps(prop) {
  return (
    <>
      <Container>
        <img src={arrow}></img>
        <TextSm>{prop.children}</TextSm>
      </Container>
    </>
  )
}
