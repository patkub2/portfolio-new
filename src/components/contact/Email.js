import React from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"
import { colors, media, typography } from "../../utils"

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
export default function Email() {
  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "default_service",
        "template_7kuen38",
        e.target,
        process.env.REACT_APP_API_KEY
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
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="user_message" />
      <input type="submit" value="Send" />
    </form>
  )
}
