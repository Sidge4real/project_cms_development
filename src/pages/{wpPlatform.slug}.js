import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn"

const SubPagePlatforms = ({
  data: {
    wpPlatform: { platformMeta: platform, slug, usecases},
  },
}) => {
  const image = getImage(
    platform.icon.localFile.childImageSharp.gatsbyImageData
  )

  return slug === "discord"
    ? discordPage()
    : slug === "facebook"
    ? facebookPage()
    : redditPage()

  function discordPage() {
    return (
      <Layout>
        <div className="PlatformSubPage-main-overwrite discordSubPage">
          <GatsbyImage className="icons" image={image} />
          <h2 className="discord-text">Discord</h2>
          <p
            className="description-platfroms"
            dangerouslySetInnerHTML={{ __html: platform.description }}
          ></p>
          <div className="info-box">
            <p>
              <b>Name:</b> <span>{platform.title}</span>
            </p>
            <p>
              <b>Company:</b> <span>{platform.company}</span>
            </p>
            <p>
              <b>Max. members</b> <span>{platform.membersCount}</span>
            </p>
            <p>
              <b>Possibilities:</b> <span>{platform.possibilities}</span>
            </p>
            <p>
              <b>Platform value:</b> <span>{platform.priceValue}</span>
            </p>
            <p>
              <b>Rating:</b> <span>{platform.rating}</span>
            </p>
            <p>
              <b>Subjects:</b> <span>{platform.subjects}</span>
            </p>
            <p>
              <b>Registered users:</b> <span>{platform.usersCount}</span>
            </p>
            <p>
            <b>Usecases: </b>
            {
              usecases.nodes.map((item, index) => {
                const usecase = item.name;
                let length = usecases.nodes.length;
                return(
                  index+1 === length-1 ? 
                  <span>{usecase} & </span>
                  : index+1 !== length ?                  
                  <span>{usecase}, </span>
                  :
                  <span>{usecase}</span>
                )
              })
            }
            </p>
          </div>
          <Link className="icon-link" to={`/platforms`}>
            <KeyboardReturnIcon className="discord-text icon-button icon-discord" />
          </Link>
        </div>
      </Layout>
    )
  }

  function facebookPage() {
    return (
      <Layout>
        <div className="PlatformSubPage-main-overwrite facebookSubPage">
          <GatsbyImage className="icons" image={image} />
          <h2 className="facebook-text">facebook</h2>
          <p
            className="description-platfroms"
            dangerouslySetInnerHTML={{ __html: platform.description }}
          />
          <div className="info-box">
            <p>
              <b>Name:</b> <span>{platform.title}</span>
            </p>
            <p>
              <b>Company:</b> <span>{platform.company}</span>
            </p>
            <p>
              <b>Max. members</b> <span>{platform.membersCount}</span>
            </p>
            <p>
              <b>Possibilities:</b> <span>{platform.possibilities}</span>
            </p>
            <p>
              <b>Platform value:</b> <span>{platform.priceValue}</span>
            </p>
            <p>
              <b>Rating:</b> <span>{platform.rating}</span>
            </p>
            <p>
              <b>Subjects:</b> <span>{platform.subjects}</span>
            </p>
            <p>
              <b>Registered users:</b> <span>{platform.usersCount}</span>
            </p>
            <p>
            <b>Usecases: </b>
            {
              usecases.nodes.map((item, index) => {
                const usecase = item.name;
                let length = usecases.nodes.length;
                console.log(index);
                return(
                  index+1 === length-1 ? 
                  <span>{usecase} & </span>
                  : index+1 !== length ?                  
                  <span>{usecase}, </span>
                  :
                  <span>{usecase}</span>
                )
              })
            }
            </p>
          </div>
          <Link className="icon-link" to={`/platforms`}>
            <KeyboardReturnIcon className="facebook-text icon-button icon-facebook" />
          </Link>
        </div>
      </Layout>
    )
  }
  function redditPage() {
    return (
      <Layout>
        <div className="PlatformSubPage-main-overwrite redditSubPage">
          <GatsbyImage className="icons" image={image} />
          <h2 className="reddit-text">Reddit</h2>
          <p
            className="description-platfroms"
            dangerouslySetInnerHTML={{ __html: platform.description }}
          />
          <div className="info-box">
            <p>
              <b>Name:</b> <span>{platform.title}</span>
            </p>
            <p>
              <b>Company:</b> <span>{platform.company}</span>
            </p>
            <p>
              <b>Max. members</b> <span>{platform.membersCount}</span>
            </p>
            <p>
              <b>Possibilities:</b> <span>{platform.possibilities}</span>
            </p>
            <p>
              <b>Platform value:</b> <span>{platform.priceValue}</span>
            </p>
            <p>
              <b>Rating:</b> <span>{platform.rating}</span>
            </p>
            <p>
              <b>Subjects:</b> <span>{platform.subjects}</span>
            </p>
            <p>
              <b>Registered users:</b> <span>{platform.usersCount}</span>
            </p>
            <p>
            <b>Usecases: </b>
            {
              usecases.nodes.map((item, index) => {
                const usecase = item.name;
                let length = usecases.nodes.length;
                console.log(index);
                return(
                  index+1 === length-1 ? 
                  <span>{usecase} & </span>
                  : index+1 !== length ?                  
                  <span>{usecase}, </span>
                  :
                  <span>{usecase}</span>
                )
              })
            }
            </p>
          </div>
          <Link className="icon-link" to={`/platforms`}>
            <KeyboardReturnIcon className="reddit-text icon-button icon-reddit" />
          </Link>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  query ($slug: String) {
    wpPlatform(slug: { eq: $slug }) {
      usecases {
      nodes {
        name
      }
    }
      platformMeta {
        company
        description
        icon {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 100, height: 100)
            }
          }
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
  }
`

export default SubPagePlatforms
