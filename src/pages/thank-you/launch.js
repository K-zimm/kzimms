import React from "react"
import { Link, graphql } from "gatsby"

import SEO from "../../components/seo"

const ThankyouLaunch = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <div>
      <SEO title="Thank You!" />
      <div>
        <h1>Thank You for subscribing to my newsletter!</h1>
      </div>
    </div>
  )
}

export default ThankyouLaunch

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
