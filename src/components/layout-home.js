import React from "react"
import {Link} from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/main.scss"

const LayoutHome = props => {
  return (
    <div className="container">
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default LayoutHome
