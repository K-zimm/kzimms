import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(funnel) { var insert = document.getElementsByTagName('script')[0], script = document.createElement('script'); script.addEventListener('load', function() {window.funnelytics.init(funnel, false); }); script.src = 'https://cdn.funnelytics.io/track.js'; script.type = 'text/javascript'; script.async = true; insert.parentNode.insertBefore(script, insert); })('4f932c4c-989f-4b1d-bb70-fc3e93cde075'); 
        `,
          }}
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <form
          name="splash-newsletter"
          method="post"
          netlify
          netlify-honeypot="bot-field"
          action="/thank-you/launch"
          style={{ display: "none" }}
        >
          <p>
            <input type="hidden" name="bot-field" />
          </p>
          <p>
            <input type="text" name="name" placeholder="NAME" />
          </p>
          <p>
            <input type="email" name="email" placeholder="EMAIL" />
          </p>
          <p>
            <button type="submit">Subscribe</button>
          </p>
        </form>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
