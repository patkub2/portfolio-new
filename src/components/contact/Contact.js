import React from "react"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"
import Title from "../Title"
import Email from "./Email"
const Container = styled.div`
  border: 1px solid blue; /* BORDER TEST*/

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
  border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  font-size: ${typography.h6};
`

const Input = styled.input`
  width: 100%;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`
const Submit = styled.input`
  width: 100%;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`
const Message = styled.input`
  width: 100%;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`
const Label = styled.div`
  width: 90%;
`

export default function Contact(prop) {
  return (
    <>
      <Container>
        <Title title="Contact">
          All informations and links can be found below. Feel free to contact me
        </Title>
        <Form>
          <Label>Name</Label>
          <Input type="text" id="name" />
          <Label>Email</Label>
          <Input type="text" id="email" />
          <Label>Message</Label>
          <Message type="text" id="message" />
          <Submit type="submit" value="Submit" id="subbmit" />
        </Form>
        <Icons>
          <Email />
        </Icons>
      </Container>
    </>
  )
}
