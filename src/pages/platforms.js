import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import { EdgesensorHigh } from "@mui/icons-material";



const PlatformsPage = () => {


  // platformMeta in graphQL voor alle data
    // var stripedHtml = data.wpPlatform.homeFields.description.replace(/<[^>]+>/g, '');
  // console.log(stripedHtml);
  // console.log(data.wpPlatform.slug);

  // delete <p></p> from the result out of GraphQL
  /* <div
     dangerouslySetInnerHTML={{ __html: data.allWpPlatform.edges[i].node.platformMeta.description}}>
     </div> */

    //  const PlatformsPage = ({
    //   data: {
    //     allWpPlatform: { edges },
    //     wpPage: { homeFields },
    //   },
    // })
  
     return (
    <Layout>
      <p>hi</p>
      {/* {
        edges.map(item => {
          const platform = item.node.platformMeta
          const slug = item.node.slug
          return (
            <div>{platform.company}</div>
          )
        })
      } */}
    </Layout>
  )
}
/* export const query = graphql`
      query{
  # allWpPlatform(sort: {fields: platformMeta___company}) {
  allWpPlatform {
    edges {
      node {
        platformMeta {
          company
          description
          membersCount
          possibilities
          priceValue
          rating
          subjects
          title
          usersCount
        }
        slug
        id
      }
    }
  }
}
  {wpPage(slug: {eq: "platforms"}) {
    homeFields {
      description
      title
    }
  }}`
*/
export default PlatformsPage