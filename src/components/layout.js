/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import DrawerAppBar from './header'
import Footer from "./footer"

// $(window).load(function() {      
//   $(".slide1").fadeOut("fast");
// });

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div className="container">
    <title>{data.site.siteMetadata.title}</title>
    <DrawerAppBar></DrawerAppBar>
    <main>
      {children}
    </main>
    <Footer></Footer>
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
