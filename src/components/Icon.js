import React, { useState } from "react"
import * as FontAwesome from "react-icons/fa"
import { IconContext } from "react-icons"
export default function Icon(props) {
  const { icon, url, background } = props
  const [hover, setHover] = useState(false)

  const components = {
    github: FontAwesome.FaGithub,
    stackoverflow: FontAwesome.FaStackOverflow,
    instagram: FontAwesome.FaInstagram,
    facebook: FontAwesome.FaFacebookF,
    youtube: FontAwesome.FaYoutube,
    linkedIn: FontAwesome.FaLinkedinIn,
    mail: FontAwesome.FaMailBulk,
    default: FontAwesome.FaQuestion,
  }
  const toggleHover = () => {
    setHover(!hover)
  }
  var linkStyle

  if (hover) {
    linkStyle = { backgroundColor: background }
  } else {
    linkStyle = {}
  }

  const IconName = components[icon] || FontAwesome.FaQuestion

  return (
    url &&
    icon && (
      <a
        href={url}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        style={linkStyle}
        role="button"
        tabIndex="-1"
        className="icon-circle"
      >
        <IconContext.Provider
          value={{ color: "white", className: "global-class-name" }}
        >
          <IconName />
        </IconContext.Provider>
      </a>
    )
  )
}
