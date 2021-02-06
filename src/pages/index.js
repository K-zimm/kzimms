import React from "react"
import { Link, graphql } from "gatsby"
import { navigate } from "gatsby-link"

import Layout from "../components/layout"
import SEO from "../components/seo"

import HeroIllustration from "../../content/assets/landing-vector_v1.svg"
import Avatar from "../../content/assets/logo_avatar.svg"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

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
    <Layout location={location} title={siteTitle} className="container home">
      <SEO title="Learn Website Technology &amp; Crypto Investing" />
      <section className="row_2-col hero">
        <div className="column vertical-center">
          <div className="hero__content">
            <div className="subtitle">Hello, I'm Kyle Zimmer</div>
            <h1 className="hero__content--slide-title">
              <span>Web Developer</span> <span>Crypto Enthusiast</span>{" "}
              <span>Creator</span>
            </h1>
          </div>
          <div className="hero__cta">
            <p>
              Get your digital personality on point. I build fast, modern, and
              brand aware websites with you as a content manager in mind.
            </p>
            <div className="work-with-me_btn">
              <Link to="#discovery-form">Work with me</Link>
            </div>
          </div>
        </div>
        <div className="column">
          <HeroIllustration className="hero__illustration" />
        </div>
      </section>
      <section className="about-section">
        <div className="about-section__header">
          <div className="subtitle">About Me</div>
          <h2>Why Trust Me With Your Business</h2>
        </div>
        <div className="row_2-col">
          <div className="column">
            <Avatar className="about-section__image" />
          </div>
          <div className="column">
            <div className="about-section__content">
              <div className="about-section__content--column">
                <h3>Web Development</h3>
                <ul>
                  <li>Wicked fast sites using cutting edge tech.</li>
                  <li>
                    Modern, user friendly content management system built to fit
                    your needs,
                  </li>
                  <li>Designed to elevate your brand and engage visitors.</li>
                  <li>
                    Custom web application development available for those that
                    have big ideas.
                  </li>
                </ul>
              </div>
              <div className="about-section__content--column">
                <h3>Cryptocurrency</h3>
                <ul>
                  <li>
                    I have been researching and actively investing in the space
                    for four years.
                  </li>
                  <li>
                    Enjoy exploring new decentralized applications (Dapps) on
                    the Etherum blockchain.
                  </li>
                  <li>
                    Watching Ethereum blockchain alternatives like Cardano and
                    Polkadot closely.
                  </li>
                  <li>
                    Believe DeFi (Decentralized Finance) and web3 are the
                    inovations of this decade.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section" id="discovery-form">
        <h2>Need a website? Lets get to work!</h2>
        <div className="subtitle">Next step: discovery call.</div>
        <form
          name="discovery-request"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          action="/thank-you/launch"
          className="request-form"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="discovery-request" />
          <input type="hidden" name="bot-field" onChange={handleChange} />
          <input
            type="text"
            name="name"
            placeholder="Your name *"
            className="request-form__name"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Your email *"
            className="request-form__email"
            required
            onChange={handleChange}
          />

          <div className="request-form__project-type">
            <p>What type of website you are looking for?</p>
            <input
              type="radio"
              name="projectType"
              value="Blog"
              id="type_blog"
              onChange={handleChange}
            />
            <label for="type_blog">Blog / Personal Site</label>
            <input
              type="radio"
              name="projectType"
              value="Business"
              id="type_business"
              onChange={handleChange}
            />
            <label for="type_business">Business</label>
            <input
              type="radio"
              name="projectType"
              value="Web App"
              id="type_web-app"
              onChange={handleChange}
            />
            <label for="type_web-app">Web Application</label>
          </div>

          <textarea
            className="request-form__message"
            placeholder="How can I help you?"
            rows="4"
            name="message"
            spellCheck="false"
          ></textarea>

          <button type="submit" className="request-form__btn work-with-me_btn">
            Request Discovery Call
          </button>
        </form>
      </section>

      {/* {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        )
      })} */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
