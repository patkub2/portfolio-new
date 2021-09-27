import React from "react"
import styled from "styled-components"
import image1 from "../../images/image1.png"
import Title from "../Title"
import Site from "./Site"
import { media, colors } from "../../utils"

const Container = styled.div`
  // border: 1px solid ${colors.black}; /* BORDER TEST*/
  display: flex;
  //flex-direction: column;
  //justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  width: 100%;
`

export default function Projects() {
  return (
    <Container>
      <Title title="Projects">
        Bellow you can find most of my project. All of them got a live version
        and an open github repo
      </Title>
      <Site img={image1} title="Booktlify">
        Pariatur duis sunt fugiat et fugiat ea mollit aliqua incididunt.
        Reprehenderit deserunt amet nisi cillum mollit est dolore incididunt
        velit eiusmod. Excepteur reprehenderit deserunt ut veniam qui anim
        ullamco nisi tempor consequat esse laborum voluptate ad. Adipisicing
        dolor aliqua voluptate commodo enim laboris sunt laboris laboris nostrud
        eiusmod ut proident. Exercitation eiusmod quis tempor proident eu qui
        esse nisi commodo fugiat. Enim ipsum qui aliqua dolor sit ea et Lorem
        voluptate commodo irure ullamco. Ipsum duis cillum laboris laborum ad
        velit ipsum cillum Lorem deserunt reprehenderit.
      </Site>
    </Container>
  )
}
