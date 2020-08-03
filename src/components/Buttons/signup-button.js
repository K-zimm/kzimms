import React from "react"
import Link from "gatsby"

const SignupButton = ({ link }) => {
  const signupLink = '/membership';
  return (
    <div className="signup-button">
      <Link to={signupLink}>
        {`%s`}
      </Link>
    </div>
  )
}

SignupButton.defaultProps = {
  link: ''
}

export default SignupButton