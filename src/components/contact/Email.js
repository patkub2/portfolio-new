import React, { useRef, useEffect, useState } from "react"
import styled from "styled-components"
import emailjs from "emailjs-com"
import { colors, media, typography } from "../../utils"
import Button from "./Button"
import "./index.css"
import ReCAPTCHA from "react-google-recaptcha"
import { ToastContainer, toast } from "react-toastify"

import "react-toastify/dist/ReactToastify.css"

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
  const recaptchaRef = useRef()
  const form = useRef()
  const [submitted, setSubmitted] = useState(false)
  const sendEmail = e => {
    e.preventDefault()
    if (submitted) {
      emailjs
        .sendForm(
          "default_service",
          "template_7kuen38",
          form.current,
          process.env.GATSBY_EMAILJS
        )
        .then(
          result => {
            recaptchaRef.current.reset()
            console.log(result.text)
            toast.success("email sent successfully", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
            document.getElementById("form").reset()
          },
          error => {
            recaptchaRef.current.reset()
            console.log(error.text)
            toast.error("oh no, something went wrong", {
              position: "bottom-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            })
          }
        )
    } else {
      toast.warning("fill in the captcha", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    }
  }
  const notify = () => recaptchaRef.current.reset()
  //<button onClick={() => notify()}>sada</button>
  return (
    <>
      <Form id="form" ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type="text" name="user_name" required />
        <Label>Email</Label>
        <Input type="email" name="user_email" required />
        <Label>Message</Label>
        <Message name="message" name="user_message" required />
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.GATSBY_CAPTCHA}
          onChange={() => setSubmitted(!submitted)}
        />
        <button
          type="submit"
          className="uiui-button uiui-button--glow example-1"
        >
          Send
        </button>
      </Form>

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  )
}
