import React from "react"
import { navigate } from "gatsby-link"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import ProfilePic from "../images/Profile-pic-outerglow.png"
import Logo_avatar from "../../content/assets/logo_avatar-w-text.svg"

import "../styles/main.scss"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const SplashPage = () => {
  const data = useStaticQuery(graphql`
    query ImageQuery {
      portrait: file(absolutePath: { regex: "/Profile-pic-outerglow.png/" }) {
        childImageSharp {
          fluid(maxWidth: 1000, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <div className="splash-page">
      <div className="hero">
        <div className="hero__image">
          <Logo_avatar className="hero__portrait" />
        </div>

        <div className="hero__text">
          <div className="hero__text--subTitle">Hello, I'm</div>
          <h1 className="hero__text--title">Kyle Zimmer</h1>
          <div className="hero__text--anouncement">
            <p>Launch in progress...</p>
            <p>
              I am in the final stretch of finishing this site! I have some
              awesome content planned, including hot tips on starting or growing
              a small business. Over the past few years I have helped many
              businesses grow by creating a digital storefront for them.
            </p>
            <p>
              I hope to share some things that I have learned from my
              experiences to help others along their journey of becoming a small
              business owner. Subscribe to my newletter below if you are
              interested in recieving updates when I release new content.
            </p>
          </div>
        </div>
        <div className="hero__cta">
          <p className="hero__cta--text">
            Lets make some money doing something we enjoy!
          </p>
          <form
            name="splash-newsletter"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            action="/thank-you/launch"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="splash-newsletter" />
            <p>
              <input type="hidden" name="bot-field" onChange={handleChange} />
            </p>
            <p>
              <input
                type="text"
                name="name"
                placeholder="NAME"
                onChange={handleChange}
              />
            </p>
            <p>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                onChange={handleChange}
              />
            </p>
            <p>
              <button type="submit">Subscribe</button>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SplashPage
