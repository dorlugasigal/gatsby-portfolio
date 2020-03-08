import React from "react"
import { SocialIcon } from "react-social-icons"
import socialLinks from "./socialLinks.json"

function SocialBar(props) {
  const mediaQuery =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 700px)").matches
  var styles = {
    height: mediaQuery ? "50px" : "100px",
    width: mediaQuery ? "50px" : "100px",
  }
  return (
    <div className="socialbar ">
      {socialLinks.links.map((item, ind) => {
        const className = `icon icon-${ind} `
        return (
          <div className={className}>
            <SocialIcon style={styles} url={item} />
          </div>
        )
      })}
    </div>
  )
}

export default SocialBar
