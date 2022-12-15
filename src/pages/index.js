import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout";
import Header from "../components/header";
import BackgroundImage from 'gatsby-background-image'
import background from '../images/image1.png'
 

const indexPage = () => {
    return(
      <Layout>
        <section className="index-section-one">
        <StaticImage id="index-image-1" src="../images/image1.png" alt="people"></StaticImage>
        <div className="slogan-container">
        <h2 className="slogan">Imagine...</h2>
        <p className="slogan-small">the perfect community for your ideas... 
        A place for your people to enjoy, to explore or to find friends. No idea to start with this? No worries, we guide you!</p>
        </div>
        </section>
        <section className="index-section-two">
          <h3>Choose wisely a platform</h3>
          <StaticImage src="../images/image1.png" alt="people"></StaticImage>
        </section>
      </Layout>
    )
}

export default indexPage
