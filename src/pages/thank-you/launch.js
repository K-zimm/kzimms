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
          <h1>Thank You for requesting a discovery call!</h1>
          <p>
            I will be contacting you shorty to schedule the call! Please prepare with information and materials that will help me understand what type of website or application you are looking for.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default ThankyouLaunch
