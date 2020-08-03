import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Logo from "../../content/assets/inline-logo.svg"
import SocialLinks from "./Social-links/vertical"

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
      <div className="header__left">
        <div className="header__cta-section">
          <div className="signup-button">
            <Link to="/membership">Sign Up</Link>
          </div>
          <div className="header__main-anouncement">
            Founder membership open now
          </div>
        </div>
        <SocialLinks className="social-links_vertical" />
      </div>
      <button className="header__menu-btn" onClick={openNav}>
        Menu
      </button>
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
