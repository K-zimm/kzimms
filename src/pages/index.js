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
            <h1>I make fast, secure, and easy to manage websites.</h1>
          </div>
          <div className="hero__cta">
            <p>
              Let's work together and increase your business potential using the
              latest technology.
            </p>
            <div className="work-with-me_btn">
              <Link to="/contact">Work with me</Link>
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
                <h3>I Have...</h3>
                <ul>
                  <li>- Completed a 2 year degree in software development.</li>
                  <li>
                    - Spent hundreds of hours on researching, learning, and
                    implementing the best new technologies in web development.
                  </li>
                  <li>
                    - Designed and devleoped websites from start to finish for
                    over 30 businesses.
                  </li>
                  <li>
                    - Worked with clients to integrate marketing tools with
                    thier website increasing efficiency.
                  </li>
                </ul>
              </div>
              <div className="about-section__content--column">
                <h3>I Will...</h3>
                <ul>
                  <li>
                    Design and develop a website and content management system
                    that will maximize speed, SEO, security, and usability by:
                  </li>
                  <ul>
                    <li>
                      - Consulting with you about your overall online strategy
                      and content management plan.
                    </li>
                    <li>
                      - Identifying content structures and management plans that
                      will best fit your business needs.
                    </li>
                    <li>
                      - Providing unparalleled support and training on how to
                      effectively use your website.
                    </li>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section">
        <h2>Tell Me About Your Ideas</h2>
        <div className="subtitle">Next step: a free discovery call.</div>
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
