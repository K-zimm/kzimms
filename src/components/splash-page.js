import React from "react"
import { navigate } from "gatsby-link"
import { Link, graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

import SEO from "../components/seo"
import SocialLinks from "../components/social-links"

import ProfilePic from "../images/Profile-pic-outerglow.png"
import Logo from "../../content/assets/logo-underline-white.svg"

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
      <SEO title="Welcome" />
      <div className="welcome-banner">
        <div className="welcome-banner__message"> Welcome To</div>
        <Logo className="welcome-banner__logo" />
      </div>

      <SocialLinks />

      <div className="hero">
        <Image
          fluid={data.portrait.childImageSharp.fluid}
          alt="Kyle Zimmer"
          className="hero__portrait"
        />
        <div className="hero__text">
          <div className="hero__text--subTitle">Hello, I'm</div>
          <h1 className="hero__text--title">Kyle Zimmer</h1>
          <div className="hero__text--anouncement">
            <p>
              I am in the process of building out a pretty cool website. This will be my hub to share information with others. I will be posting content with a variety of topics including my journey as a web developer, technology such as cryptocurrency and software, start ups and small business, and other comments on the world as it be.
            </p>
            <h2>
              Subscribe to my email newletter to get notified when my first blog post drops
            </h2>
          </div>
          <div className="hero__text--cta">
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
    </div>
  )
}

export default SplashPage
