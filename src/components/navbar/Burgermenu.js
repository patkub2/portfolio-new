import { slide as Menu } from "react-burger-menu"
import "./index.css"
import React, { useState } from "react"
import styled from "styled-components"
import { colors, media, typography } from "../../utils"
const Link = styled.a`
  //border: 1px solid red; /* BORDER TEST*/

  font-size: ${typography.h3};
`

export default function Burgermenu() {
  const [menuOpenState, setMenuOpenState] = useState(false)

  const Close = () => setMenuOpenState(false)
  return (
    <>
      <Menu
        right
        width={"40%"}
        isOpen={menuOpenState}
        onOpen={() => setMenuOpenState(true)}
        onClose={() => setMenuOpenState(false)}
      >
        <Link href="#home" onClick={Close}>
          Home
        </Link>
        <Link href="#technologies" onClick={Close}>
          Technologies
        </Link>
        <Link href="#projects" onClick={Close}>
          Projects
        </Link>
        <Link href="#emaile" onClick={Close}>
          Contact
        </Link>
      </Menu>
    </>
  )
}
