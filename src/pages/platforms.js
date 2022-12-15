import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";

const PlatformsPage = () =>{

    const data = useStaticQuery(graphql`
    query {
  wpPlatform(slug: {}) 
  {
    id
    slug
    title
    content
    homeFields {
      description
      title
      fieldGroupName
    }
  }
}

  `)
  var stripedHtml = data.wpPlatform.homeFields.description.replace(/<[^>]+>/g, '');
  console.log(stripedHtml);
  console.log(data.wpPlatform.slug);


    return(
        <Layout>
            <section>
            <h1>{data.wpPlatform.homeFields.description}</h1>
            </section>           
        </Layout>
    )
}

export default PlatformsPage