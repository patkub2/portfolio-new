import React from "react"
import styled from "styled-components"
const Container = styled.div`
  .uiui-button {
    min-width: 220px;
    padding: 18px 25px;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    font-weight: 700;
    letter-spacing: 0.5px;
    font-size: 16px;
    background: black;
    color: #fff;
  }

  .uiui-button--glow {
    z-index: 1;
    transition: all 0.3s ease-out;
    border-radius: 10px;
  }

  .uiui-button--glow:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff3c3c,
      #4968ff,
      #a34dff,
      #ff53da,
      #ff4444
    );
    position: absolute;
    top: 0;
    left: 0;
    background-size: 400%;
    z-index: -1;
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: all 0.3s ease-out;
    border-radius: 10px;
    transform-origin: center;
    transform: translateZ(0);
    width: 100%;
    height: 100%;
  }

  .uiui-button--glow:hover {
    transform: scale(1.025) translateZ(0);
  }
  .uiui-button--glow:hover:before {
    opacity: 1;
    transform: translateZ(0) scaleX(1.045) scaleY(1.145);
  }
  .uiui-button--glow:active::after {
    background: rgb(36, 36, 36);
  }

  .uiui-button--glow:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: black;
    left: 0;
    top: 0;
    border-radius: 8px;
  }
`

export default function Button(prop) {
  return (
    <Container>
      <button class="uiui-button uiui-button--glow example-1">
        {prop.children}
      </button>
    </Container>
  )
}
