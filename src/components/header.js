import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import SocialLinks from "./Social-links/vertical"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
      logo: file(relativePath: { eq: "logo-text.png" }) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  /* Set the width of the side navigation to 250px */
  function openNav() {
    const menu = document.querySelector(".header__nav")
    menu.style.width = "250px"
    menu.style.padding = "60px 15px 0 15px"
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    document.getElementById(".header__nav").style.width = "0"
  }
  return (
    <div className="header">
      <SocialLinks />
      <div className="header__left">
        <div className="logo-container">
          <Link to="/">
            <Img fluid={data.logo.childImageSharp.fluid} />
          </Link>
        </div>
      </div>
      <div className="header__middle">
        <nav className="header__nav">
          More Information Coming Soon!
          {/* <ul className="nav-list">
            <li>
              <Link
                to="/home"
                className="nav-list__item"
                activeClassName="nav-list__item-active"
                style={{ textDecoration: "none" }}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="nav-list__item"
                activeClassName="nav-list__item-active"
                style={{ textDecoration: "none" }}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="nav-list__item"
                activeClassName="nav-list__item-active"
                style={{ textDecoration: "none" }}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="nav-list__item"
                activeClassName="nav-list__item-active"
                style={{ textDecoration: "none" }}
              >
                Contact
              </Link>
            </li>
          </ul> */}
        </nav>
      </div>
      <div className="header__right">
        <div className="header__cta-section">
          <div className="work-with-me_btn">
            <Link to="/membership">Get A Website</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
