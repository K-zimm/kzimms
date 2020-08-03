import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../../components/seo"
import SplashPage from "../../components/splash-page"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return <SplashPage />
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
