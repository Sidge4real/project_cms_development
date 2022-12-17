import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";

const PlatformsPage = () => {

  const data = useStaticQuery(graphql`
      query{
  allWpPlatform(sort: {fields: platformMeta___company}) {
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
      }
    }
  }
}


}

  `)

  // platformMeta in graphQL voor alle data
    // var stripedHtml = data.wpPlatform.homeFields.description.replace(/<[^>]+>/g, '');
  // console.log(stripedHtml);
  // console.log(data.wpPlatform.slug);


  return (
    <Layout>
      <section>
        <div
          dangerouslySetInnerHTML={{ __html: data.allWpPlatform.nodes.platformMeta.description}}>
        </div>
      </section>
    </Layout>
  )
}

export default PlatformsPage