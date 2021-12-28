import React from "react"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"

const Container = styled.div`
  border: 1px solid purple; /* BORDER TEST*/

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

export default function Icons() {
  return (
    <>
      <Container>
        <div>
          <div>Email</div>
          <div>My email - patrykkubala1999@gmail.com</div>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </Container>
    </>
  )
}
