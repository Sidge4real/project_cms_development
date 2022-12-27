import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const PlatformsPage = ({
  data: {
    allWpPlatform: { edges: platforms },
  },
}) => {
  function stylingDiscord(){
    return (
      <Link className="platform-link-button discord" to="/discord">Read more</Link>
    )
  }
  function stylingReddit(){
    return (
      <Link className="platform-link-button reddit" to="/reddit">Read more</Link>
    )
  }
  function stylingFacebook(){
    return (
      <Link className="platform-link-button facebook" to="/facebook">Read more</Link>
    )
  }
  return (
    <Layout>
      <div className="background-platformPage">
      <section className="platformPage-main-overwrite">
      {
        platforms.map((item, index) => {
          const platform = item.node.platformMeta
          const slug = item.node.slug
          const image = getImage(platform.icon.gatsbyImage);
          return (
              <div className="data-platformPage">
                <GatsbyImage className="icons" width="50" height="50" image={image} />
                <p key={index}><b>Name:</b><span>{platform.title}</span></p>
                <p key={index}><b>Company:</b><span>{platform.company}</span></p>
                <p key={index}><b>Max. members</b><span>{platform.membersCount}</span></p>
                <p key={index}><b>Possibilities:</b><span>{platform.possibilities}</span></p>
                <p key={index}><b>Platform value:</b><span>{platform.priceValue}</span></p>
                <p key={index}><b>Rating:</b><span>{platform.rating}</span></p>
                <p key={index}><b>Subjects:</b><span>{platform.subjects}</span></p>
                <p key={index}><b>Registered users:</b><span>{platform.usersCount}</span></p>

                {/* <p key={index} dangerouslySetInnerHTML={{ __html: platform.description }}>{platform.description}</p> */}
              
              {
                slug == "discord" ? (stylingDiscord()) : slug == "facebook" ? (stylingFacebook()) : (stylingReddit())
              }
              </div>
          )
        })
      }
      </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query{
  allWpPlatform {
    edges {
      node {
        platformMeta {
          company
          description
          icon {
            gatsbyImage(width: 100, height: 100)
          }
          membersCount
          possibilities
          priceValue
          rating
          subjects
          title
          usersCount
        }
        slug
        title
      }
    }
  }
}`


export default PlatformsPage
