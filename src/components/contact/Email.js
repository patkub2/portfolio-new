import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"
import { colors, media, typography } from "../../utils"
import Button from "./Button"
import "./index.css"
import ReCAPTCHA from "react-google-recaptcha"

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
const Message = styled.textarea`
  width: 100%;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 10px;
  resize: none;
`
const Label = styled.div`
  margin-top: 15px;
  //border: 1px solid blue; /* BORDER TEST*/
  width: 100%;
`
const Form = styled.form`
  border: 1px solid blue; /* BORDER TEST*/
  width: 100%;
`
export default function Email() {
  const form = useRef()
  const [submitted, setSubmitted] = useState(false)
  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm(
        "default_service",
        "template_7kuen38",
        form.current,
        process.env.GATSBY_EMAILJS
      )
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <Form ref={form} onSubmit={sendEmail}>
      <Label>Name</Label>
      <Input type="text" name="user_name" required />
      <Label>Email</Label>
      <Input type="email" name="user_email" required />
      <Label>Message</Label>
      <Message name="message" name="user_message" required />
      <ReCAPTCHA
        sitekey={process.env.GATSBY_CAPTCHA}
        onChange={() => setSubmitted(true)}
      />
      <input
        type="submit"
        value="Send"
        className="uiui-button uiui-button--glow example-1"
      />
      <button
        onClick={() => {
          console.log(submitted)
        }}
      >
        asd
      </button>
    </Form>
  )
}
