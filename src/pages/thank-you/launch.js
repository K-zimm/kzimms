import React from "react"

import SEO from "../../components/seo"
import Layout from "../../components/layout"
import SpaceShuttle from "../../../content/assets/blast-off.svg"

const ThankyouLaunch = ({ data }) => {
  return (
    <Layout className="container thank-you">
      <div className="thankyou-page">
        <SEO title="Thank You!" />
        <div className="thankyou-graphic">
          <SpaceShuttle />
        </div>
        <div className="thankyou-message">
          <h1>Please select a meeting time.</h1>
        </div>
        <div
          className="meetings-iframe-container"
          data-src="https://meetings.hubspot.com/kyle532?embed=true"
        ></div>
      </div>
    </Layout>
  )
}

export default ThankyouLaunch
