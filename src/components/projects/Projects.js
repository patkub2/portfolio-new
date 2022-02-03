import React from "react"
import styled from "styled-components"
import image1 from "../../images/image1.webp"
import image2 from "../../images/image2.webp"
import image3 from "../../images/image3.webp"
import image4 from "../../images/image4.webp"
import image5 from "../../images/image5.webp"
import image6 from "../../images/image6.webp"
import Title from "../Title"
import Site from "./Site"
import sassIcon from "../../images/icons/sass-skew.svg"
import tsIcon from "../../images/icons/typescript-skew.svg"
import reactIcon from "../../images/icons/react-skew.svg"
import reduxIcon from "../../images/icons/redux-skew.svg"
import gatsbyIcon from "../../images/icons/gatsby-skew.svg"
import gsapIcon from "../../images/icons/gsap.svg"
import styledComponentsIcon from "../../images/icons/styled-components.svg"
import axiosIcon from "../../images/icons/axios.svg"
import apiIcon from "../../images/api.png"
import mongodbIcon from "../../images/mongodb.png"
import nodejsIcon from "../../images/nodejs.png"
import expressIcon from "../../images/express.png"
import localstorageIcon from "../../images/localstorage.png"

const Container = styled.div`
  //border: 1px solid green; /* BORDER TEST*/
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  width: 100%;
`

export default function Projects() {
  return (
    <Container id="projects">
      <Title title="Projects">
        Bellow you can find most of my project. All of them got a live version
        and an open github repo
      </Title>
      <Site
        img={image5}
        title="Portfolio"
        github="https://github.com/patkub2/portfolio-new"
        live="#"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],

          ["GSAP", gsapIcon],
          ["Gatsby", gatsbyIcon],
        ]}
      >
        Portfolio page made in react with use of Gatsby. In this project i manly
        focused on learning gatsby and animations in GSAP . For styling I used
        styled-components.
      </Site>
      <Site
        mirror
        img={image6}
        title="CoffeeHome"
        github="https://github.com/patkub2/coffee-home"
        live="https://github.com/patkub2/coffee-home"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],
          ["MongoDB", mongodbIcon],
          ["TypeScript", tsIcon],
          ["NodeJS", nodejsIcon],
          ["Express", expressIcon],
        ]}
      >
        The latest project I'm still working on. Online store which will allow
        the customer to log in and add products to cart. Also a option to add
        new products from the administrator level. The site is still under
        development due to lack of time.
      </Site>
      <Site
        img={image4}
        title="Portfolio (old)"
        github="https://github.com/patkub2/portfolio"
        live="https://patkubold.netlify.app"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],
          ["Redux", reduxIcon],
          ["GSAP", gsapIcon],
        ]}
      >
        Portfolio page made in react. Redux has been used to change the language
        of the page without having to refresh it. For styling I used
        styled-components. Animations were made in GSAP.
      </Site>
      <Site
        mirror
        img={image2}
        title="Life-cost App"
        github="https://github.com/patkub2/life-cost-app"
        live="https://patkub2-life-cost-app.netlify.app"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],
          ["Sass", sassIcon],
          ["localstorage", localstorageIcon],
        ]}
      >
        A small ReactJS-based web application and local storage that includes
        some basic functions such as editing and deleting. The purpose of the
        app is to help people record and analyze the cost of their lives.
      </Site>
      <Site
        img={image1}
        title="Booktlify"
        github="https://github.com/patkub2/booktifly"
        live="https://patkub2-booktlify.netlify.app"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],
          ["axios", axiosIcon],
          ["API", apiIcon],
        ]}
      >
        A simple application that allows you to search for books and open them
        with the help of google books. The application was created in React and
        uses the google books API. I used styled for styling components with
        flexbox.
      </Site>
      <Site
        mirror
        img={image3}
        title="Fast Typing Game"
        live="https://patkub2-fast-typing-game.netlify.app"
        github="https://github.com/patkub2/fast-typing-game"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],
        ]}
      >
        The first major project using React Hooks tools. A game that is designed
        to measure your writing time and show some motivating random quotes.
      </Site>
    </Container>
  )
}
