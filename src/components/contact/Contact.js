import React from "react"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"
import Title from "../Title"
import Button from "./Button"
import Email from "./Email"
const Container = styled.div`
  border: 1px solid purple; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const Icons = styled.div`
  border: 1px solid red; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const Form = styled.div`
  border: 5px solid pink; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: ${typography.h6};
`

export default function Contact(prop) {
  return (
    <>
      <Container>
        <Title title="Contact">
          All informations and links can be found below. Feel free to contact me
        </Title>
        <Form>
          <Email />
        </Form>
        <Icons> </Icons>
      </Container>
    </>
  )
}
