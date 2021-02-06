import React from "react"
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="hubspot_meetings"
      src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
      type="text/javascript"
    />,
  ])
}
