import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Logo from "../../content/assets/logo-underline-white.svg"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="header">
      <nav className="header__nav">
        <div className="logo-container">
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link
              to="/"
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
        </ul>
      </nav>
    </div>
  )
}

export default Header
