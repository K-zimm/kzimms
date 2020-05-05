import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import ProfilePic from "../images/Profile-pic-outerglow.png"
import Logo from "../../content/assets/logo-underline-white.svg"

import "../styles/main.scss"

const SplashPage = () => {
  return (
    <div className="splash-page">
      <img src={ProfilePic} alt="Kyle Zimmer" />
      <div className="center-text">
        <div className="center-text__position">Web Developer</div>
        <Logo className="center-text__logo" />
        <div className="center-text__anouncement">Website In Progress</div>
      </div>
      <div className="contact-area">
        <form name="contact-area__form" method="POST" data-netlify="true">
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Role: <input type="text" name="role" />
            </label>
          </p>
          <p>
            <label>
              Subscribe to email newsletter?:<span>(once a week)</span>{" "}
              <input
                type="checkbox"
                id="subscribe"
                name="subscribe"
                value="true"
              />
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    </div>
  )
}

export default SplashPage
