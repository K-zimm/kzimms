import React from "react"

import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <footer>
      <p>
        Created by {data.site.siteMetadata.author} &copy; 2020 | All Rights
        Reserved
      </p>
    </footer>
  )
}

export default Footer
