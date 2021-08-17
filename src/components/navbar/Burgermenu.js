import { slide as Menu } from "react-burger-menu"
import "./index.css"
import React from "react"

export default function Burgermenu() {
  return (
    <div>
      <Menu right>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small">Settings</a>
      </Menu>
    </div>
  )
}
