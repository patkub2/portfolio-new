import React from "react"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"
import Main from "./Main"
import Mountains from "./Mountains"
const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/

  width: 100%;
  display: flex;
  justify-content: center;
  //min-height: 100vh;
  flex-wrap: wrap;
  ${media.desktop`
  min-height: 100vh;
  justify-content:flex-end;
  align-items: center;
  `}
`

export default function Hello() {
  return (
    <Container>
      <Main />
      <Mountains />
    </Container>
  )
}
