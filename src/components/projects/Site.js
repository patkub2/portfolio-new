import React from "react"
import styled from "styled-components"
import Picture from "./Picture"
import { colors, media, typography } from "../../utils"

const Container = styled.div`
  border: 2px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: flex-start;
  //align-items: center;
  flex-wrap: wrap;
  font-style: normal;
`
const TextB = styled.div`
  border: 1px solid red; /* BORDER TEST*/
`
const Text = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  ${media.tablet`
  width: 50%;
  `}//margin: 1% 0;
`
const TextSm = styled.div`
  border: 1px solid red; /* BORDER TEST*/
`
const Pic = styled.div`
  border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  ${media.tablet`
  width: 49%;
  `}
`

const Tech = styled.div`
  width: 100%;
  min-width: 290px;
  border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  ${media.phone`
  width: 40%;
  `}
`
const Icon = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid red; /* BORDER TEST*/
  margin: 0;
  ${media.tablet`
  width: 30px;
  height: 30px;
  `}
`
const IconText = styled.div`
  width: 50%;
  margin-left: 20px;
  border: 1px solid red; /* BORDER TEST*/
`

export default function Site(prop) {
  const num = prop.tech
  return (
    <Container>
      <Pic>
        <Picture img={prop.img} />
      </Pic>
      <Text>
        <TextB>{prop.title}</TextB>
        <TextSm>{prop.children}</TextSm>

        {num.map(p => (
          <Tech key={p[0]}>
            <Icon src={p[1]} />

            <IconText>{p[0]}</IconText>
          </Tech>
        ))}
      </Text>
    </Container>
  )
}
