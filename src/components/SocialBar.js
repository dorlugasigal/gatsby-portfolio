import React from "react"
import socialLinks from "./socialLinks.json"
import Icon from "./Icon"

function SocialBar(props) {
  return (
    <div className="socialbar ">
      {socialLinks.links
        .filter(opt => opt.show)
        .map((item, ind) => {
          const className = `icon-entrance-${ind}`
          return (
            <div
              style={{ animation: `bounce-in-top 1.2s both 3.${ind}s` }}
              key={className}
            >
              <div className="icon-wrapper">
                <Icon
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
