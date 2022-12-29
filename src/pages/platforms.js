import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const PlatformsPage = ({
  data: {
    allWpPlatform: { edges: platforms },
  },
}) => {
  function stylingDiscord() {
    return (
      <a className="platform-link-4button" href="/discord"><button className="platform-link-button discord" href="/discord">
        Read more
      </button></a>
    )
  }
  function stylingReddit() {
    return (
      <a className="platform-link-4button" href="/reddit"><button className="platform-link-button reddit" to="/reddit">
        Read more
      </button></a>
    )
  }
  function stylingFacebook() {
    return (
      <a className="platform-link-4button" href="/facebook"><button className="platform-link-button facebook" to="/facebook">
        Read more
      </button></a>
    )
  }
  return (
    <Layout>
      <div className="background-platformPage">
        <section className="platformPage-main-overwrite">
          {platforms.map((item, index) => {
            const platform = item.node.platformMeta
            const slug = item.node.slug
            const image = getImage(platform.icon.gatsbyImage)
            return (
              <div className="data-platformPage">
                <GatsbyImage
                  className="icons"
                  width="50"
                  height="50"
                  image={image}
                />
                {
                  slug === "discord" ?
                  <p className="discord-text" dangerouslySetInnerHTML={{ __html: platform.description }} />              
                  : slug === "facebook" ? 
                  <p className="facebook-text" dangerouslySetInnerHTML={{ __html: platform.description }} />
                  :
                  <p className="reddit-text" dangerouslySetInnerHTML={{ __html: platform.description }} />              
                }
                {slug === "discord"
                  ? stylingDiscord()
                  : slug === "facebook"
                  ? stylingFacebook()
                  : stylingReddit()}
              </div>
            )
          })}
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
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
  }
`

export default PlatformsPage
