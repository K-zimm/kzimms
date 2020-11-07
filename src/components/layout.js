import React from "react"

import Footer from "../components/footer"
import Header from "../components/header"

import "../styles/main.scss"

const Layout = props => {
  return (
    <div className={props.className}>
      <Header />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  )
}

export default Layout
