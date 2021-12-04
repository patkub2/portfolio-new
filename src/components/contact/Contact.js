import React from "react"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"
import Title from "../Title"
const Container = styled.div`
  border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`
const Icons = styled.div`
  border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
`
const Form = styled.div`
  border: 1px solid blue; /* BORDER TEST*/

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 50%;
  font-size: ${typography.h6};
`

const Input = styled.input`
  width: 90%;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
`
const Label = styled.label``

export default function Contact(prop) {
  return (
    <>
      <Container>
        <Title title="Contact">
          All informations and links can be found below. Feel free to contact me
        </Title>
        <Form>
          <form>
            <Label>Name</Label>
            <Input type="text" id="fname" name="fname" />
            <Label>Email</Label>
            <Input type="text" id="lname" name="lname" />
            <Label>Message</Label>
            <Input type="text" id="lname" name="lname" />
            <Input type="submit" value="Submit" />
          </form>
        </Form>
        <Icons></Icons>
      </Container>
    </>
  )
}
