import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  width: 100%;
  min-height: 500px;
`

export default function Site(prop) {
  return <Container>{prop.children}</Container>
}
