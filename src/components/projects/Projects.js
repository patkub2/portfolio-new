import React from "react"
import styled from "styled-components"
import image1 from "../../images/image1.png"
import Title from "../Title"
import Site from "./Site"
import { media, colors, typography } from "../../utils"
import htmlIcon from "../../images/icons/html-skew.svg"
import cssIcon from "../../images/icons/css-skew.svg"
import sassIcon from "../../images/icons/sass-skew.svg"
import jsIcon from "../../images/icons/javascript-skew.svg"
import tsIcon from "../../images/icons/typescript-skew.svg"
import reactIcon from "../../images/icons/react-skew.svg"
import reduxIcon from "../../images/icons/redux-skew.svg"
import gatsbyIcon from "../../images/icons/gatsby-skew.svg"
import gitIcon from "../../images/icons/git-skew.svg"
import styledComponentsIcon from "../../images/icons/styled-components.svg"
import axiosIcon from "../../images/icons/axios.svg"

const Container = styled.div`
  border: 1px solid green; /* BORDER TEST*/
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  width: 100%;
`

export default function Projects() {
  return (
    <Container>
      <Title title="Projects">
        Bellow you can find most of my project. All of them got a live version
        and an open github repo
      </Title>
      <Site
        img={image1}
        title="Booktlify"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],
          ["axios", axiosIcon],
          ["asdasd", tsIcon],
        ]}
      >
        Pariatur duis sunt fugiat et fugiat ea mollit aliqua incididunt.
        Reprehenderit deserunt amet nisi cillum mollit est dolore incididunt
        velit eiusmod. Excepteur reprehenderit deserunt ut veniam qui anim
        ullamco nisi tempor consequat esse laborum voluptate ad. Adipisicing
        dolor aliqua voluptate commodo enim laboris sunt laboris laboris nostrud
      </Site>
      <Site
        img={image1}
        title="Booktlify"
        tech={[
          ["React & Hooks", reactIcon],
          ["Styled components", styledComponentsIcon],
          ["axios", axiosIcon],
          ["asdasd", tsIcon],
        ]}
      >
        Pariatur duis sunt fugiat et fugiat ea mollit aliqua incididunt.
        Reprehenderit deserunt amet nisi cillum mollit est dolore incididunt
        velit eiusmod. Excepteur reprehenderit deserunt ut veniam qui anim
        ullamco nisi tempor consequat esse laborum voluptate ad. Adipisicing
        dolor aliqua voluptate commodo enim laboris sunt laboris laboris nostrud
      </Site>
    </Container>
  )
}
