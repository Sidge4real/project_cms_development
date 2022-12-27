import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const SubPagePlatforms = (
    {
        data: {
          wpPlatform: {
            platformMeta: platform
        },
        },
      }
) =>{
    return(
        <Layout>
            <div className="background-platformPage">
                <h2>{platform.title}</h2>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query ($slug: String) {
  wpPlatform (slug: { eq: $slug }) {
    platformMeta {
      company
      description
      icon {
        height
        width
      }
      membersCount
      possibilities
      rating
      priceValue
      subjects
      title
      usersCount
    }
    slug
  }
}`


export default SubPagePlatforms