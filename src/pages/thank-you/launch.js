import React from "react"

import SEO from "../../components/seo"
import Layout from "../../components/layout"

import Hubspot from "../../components/Widgets/hubspot-appointments"
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
          <h1>Thank You for requesting a discovery call!</h1>
          <p>Please schedule a meeting time that works best for you below.</p>
        </div>
        <Hubspot />
      </div>
    </Layout>
  )
}

export default ThankyouLaunch
