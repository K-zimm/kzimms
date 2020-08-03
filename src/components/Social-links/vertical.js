import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SocialSprite from "../../images/social-icon_sprite.svg"

const SocialLinks = () => {
  const data = useStaticQuery(graphql`
    query SocialQueryVertical {
      site {
        siteMetadata {
          social {
            twitter
            facebook
            instagram
            linkedin
            youtube
            twitch
          }
        }
      }
    }
  `)

  const social = data.site.siteMetadata.social

  return (
    <div className="social-links_vertical">
      <a href={`https://facebook.com/${social.facebook}`} target="_blank" rel="noopener noreferrer">
        <svg className="social-icon">
          <use xlinkHref={`${SocialSprite}#icon-facebook`} />
        </svg>
      </a>
      <a href={`https://instagram.com/${social.instagram}`} target="_blank" rel="noopener noreferrer">
        <svg className="social-icon">
          <use xlinkHref={`${SocialSprite}#icon-instagram`} />
        </svg>
      </a>
      <a href={`https://twitter.com/${social.twitter}`} target="_blank" rel="noopener noreferrer">
        <svg className="social-icon">
          <use xlinkHref={`${SocialSprite}#icon-twitter`} />
        </svg>
      </a>
      <a href={`https://youtube.com/channel/${social.youtube}`} target="_blank" rel="noopener noreferrer">
        <svg className="social-icon">
          <use xlinkHref={`${SocialSprite}#icon-youtube`} />
        </svg>
      </a>
      <a href={`https://linkedin.com/in/${social.linkedin}`} target="_blank" rel="noopener noreferrer">
        <svg className="social-icon">
          <use xlinkHref={`${SocialSprite}#icon-linkedin`} />
        </svg>
      </a>
      <a href={`https://twitch.com/${social.twitch}`} target="_blank" rel="noopener noreferrer">
        <svg className="social-icon">
          <use xlinkHref={`${SocialSprite}#icon-twitch`} />
        </svg>
      </a>
    </div>
  )
}

export default SocialLinks