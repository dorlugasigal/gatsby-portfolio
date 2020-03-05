import React from "react"
import { SocialIcon } from "react-social-icons"

function SocialBar(props) {
  const mediaQuery =
    (window && window.matchMedia("(max-width: 700px)").matches) || false
  var styles = {
    height: mediaQuery ? "50px" : "75px",
    width: mediaQuery ? "50px" : "75px",
  }
  return (
    <div className="socialbar">
      <div className="icon">
        <SocialIcon style={styles} url="https://github.com/dorlugasigal" />
      </div>
      <div className="icon">
        <SocialIcon
          style={styles}
          url="https://www.linkedin.com/in/dor-lugasi-104736131/"
        />
      </div>
      <div className="icon">
        <SocialIcon style={styles} url="https://www.facebook.com/Dor.Lugasi" />
      </div>
      <div className="icon">
        <SocialIcon
          style={styles}
          url="https://www.youtube.com/channel/UCM-rav7cI8i8KFQ6HgjKszA"
        />
      </div>
      <div className="icon">
        <SocialIcon style={styles} url="mailto:DorLugasiGal@gmail.com" />
      </div>
      <div className="icon">
        <SocialIcon
          style={styles}
          url="https://www.instagram.com/dorlugasigal/"
        />
      </div>
    </div>
  )
}

export default SocialBar