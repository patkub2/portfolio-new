import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import im1 from "../images/1.png"
import im2 from "../images/2.png"
import { ParallaxBanner } from "react-scroll-parallax"
import { ParallaxProvider } from "react-scroll-parallax"
const IndexPage = () => (
  <ParallaxProvider>
    <img src={im1} />
    <img src={im2} />
  </ParallaxProvider>
)

export default IndexPage
