import React from "react"
import styled from "styled-components"
import { colors, media, typography } from "../utils"

const Container = styled.div`
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: 50px;
  width: 100%;
  font-size: ${typography.h7};
  color: black;
  background-color: white;
`

export default function Footer() {
  return <Container>© 2022 Patryk Kubala. All rights reserved.</Container>
}
