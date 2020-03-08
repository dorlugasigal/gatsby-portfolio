import React from "react"
import socialLinks from "./socialLinks.json"
import Icon from "./Icon"

function SocialBar(props) {
  const mediaQuery =
    typeof window !== "undefined" &&
    window.matchMedia("(max-width: 700px)").matches
  const size = mediaQuery ? "20px" : "50px"

  return (
    <div className="socialbar ">
      {socialLinks.links
        .filter(opt => opt.show)
        .map((item, ind) => {
          const className = `icon-${ind} `
          return (
            <div className={className}>
              <div className="icon">
                <Icon
                  size={size}
                  icon={item.icon}
                  url={item.url}
                  background={item.background}
                />
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default SocialBar
