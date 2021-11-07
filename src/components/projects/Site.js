import React from "react"
import styled from "styled-components"
import Picture from "./Picture"
import { colors, media, typography } from "../../utils"

const Container = styled.div`
  //border: 2px solid blue; /* BORDER TEST*/
  display: flex;
  justify-content: space-evenly;
  align-items: space-around;
  //align-items: center;
  flex-wrap: wrap;
  font-style: normal;
  margin-bottom: 100px;
`
const TextB = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  margin: 15px 0px;
  font-size: ${typography.h3};
`
const Text = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  ${media.desktop`
  width: 40%;
  `}//margin: 1% 0;
`
const TextSm = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  font-size: ${typography.h6};
  margin-bottom: 15px;
  font-weight: 400;
`
const Pic = styled.div`
  //border: 1px solid red; /* BORDER TEST*/
  width: 100%;
  ${media.desktop`
  width: 50%;
  `}
`

const Tech = styled.div`
  width: 100%;
  height: 60px;
  //min-width: 290px;
  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  //justify-content: center;
  align-items: center;
  font-size: ${typography.h6};
  font-style: normal;
  ${media.phone`
  width: 40%;
  font-size: ${typography.h6};
  `}
  ${media.tablet`
  width: 50%;
  //font-weight: 400;
  font-size: ${typography.h6};
  `}
`
const TechContainer = styled.div`
  width: 100%;

  //border: 1px solid blue; /* BORDER TEST*/
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Icon = styled.img`
  width: 30px;
  height: 30px;
  //border: 1px solid red; /* BORDER TEST*/
  margin: 0;
  ${media.tablet`
  width: 30px;
  height: 30px;
  `}
`
const IconText = styled.div`
  width: 50%;
  margin-left: 10px;
  //border: 1px solid red; /* BORDER TEST*/
`

export default function Site(prop) {
  const num = prop.tech
  if (prop.mirror) {
    return (
      <Container>
        <Text>
          <TextB>{prop.title}</TextB>
          <TextSm>{prop.children}</TextSm>
          <TechContainer>
            {num.map(p => (
              <Tech key={p[0]}>
                <Icon src={p[1]} />

                <IconText>{p[0]}</IconText>
              </Tech>
            ))}
          </TechContainer>
        </Text>{" "}
        <Pic>
          <Picture img={prop.img} />
        </Pic>
      </Container>
    )
  } else
    return (
      <Container>
        <Pic>
          <Picture img={prop.img} />
        </Pic>
        <Text>
          <TextB>{prop.title}</TextB>
          <TextSm>{prop.children}</TextSm>
          <TechContainer>
            {num.map(p => (
              <Tech key={p[0]}>
                <Icon src={p[1]} />

                <IconText>{p[0]}</IconText>
              </Tech>
            ))}
          </TechContainer>
        </Text>
      </Container>
    )
}
