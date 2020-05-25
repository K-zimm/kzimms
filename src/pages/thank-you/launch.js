import React from "react"

import SEO from "../../components/seo"
import SocialLinks from "../../components/social-links"
import SpaceShuttle from "../../../content/assets/blast-off.svg"

const ThankyouLaunch = ({ data }) => {
  return (
    <div className="thankyou-page">
      <SEO title="Thank You!" />

      <div className="thankyou-graphic">
        <SpaceShuttle />
      </div>
        <div className="thankyou-message">
          <h1>Thank You for subscribing to my newsletter!</h1>
          <p>
            I hope you will find my journey interesting and gain some value from
            it! I am always open to feedback. Please don't hesitate to ask me
            questions, suggest content, or offer constructive criticism.
          </p>
          <p>
            <em>
              You can unsubscribe anytime by clicking the link at the bottom of
              the emails.
            </em>
          </p>
        </div>
        <div className="thankyou-social">
          <h2>Show Me Some Social Love</h2>
          <SocialLinks />
        </div>
    </div>
  )
}

export default ThankyouLaunch
