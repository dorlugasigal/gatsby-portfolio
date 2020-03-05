import React from "react"

function Logo() {
  return (
    <div id="logoWrapper">
      <svg
        width="400"
        height="400"
        fill="none"
        viewBox="0 0 400 400"
        id="logo"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.9665 138.206L18.9667 138.206C38.0167 82.24 82.24 38.0167 138.206 18.9667L138.206 18.9665C156.458 12.7509 181.586 8.5 200 8.5C208.419 8.5 227.755 10.4802 237.317 12.3529C261.782 17.1869 284.575 26.6552 306.309 41.177C316.527 48.0223 318.24 49.3572 326.252 56.38C357.627 83.9074 378.955 121.215 387.449 162.995C391.684 184.07 391.683 215.933 387.449 237.007C380.93 269.305 365.415 301.299 344.822 324.75L344.815 324.757C314.016 360.097 275.351 381.221 227.603 389.132C223.064 389.847 211.71 390.3 200.284 390.375C188.815 390.451 177.824 390.14 173.947 389.44C172.111 389.1 169.218 388.576 166.52 388.088C165.245 387.857 164.013 387.634 162.957 387.442C122.414 379.646 84.0139 357.634 56.38 326.252C49.3572 318.24 48.0223 316.527 41.177 306.309C26.6552 284.575 17.1869 261.782 12.3529 237.317C10.4802 227.755 8.5 208.419 8.5 200C8.5 181.586 12.7509 156.458 18.9665 138.206Z"
          stroke="#5F3F7B"
          stroke-width="5"
        />
        <path
          d="M96.1315 360.25L96.1264 360.247C86.5872 353.62 77.1625 346.534 74.7328 344.198L74.7194 344.185L74.7058 344.172C74.3654 343.855 73.9003 343.418 73.3455 342.897C71.4952 341.158 68.6472 338.483 66.0994 336.166C60.7867 331.148 56.0581 326.125 50.1206 319L50.1143 318.992C48.1268 316.626 44.2297 311.001 40.2709 304.912C36.3318 298.854 32.4632 292.54 30.5179 288.846C26.8727 281.75 20.6296 267.081 17.8745 258.718L17.8716 258.709L17.8687 258.7C12.6608 243.273 8.5 217.045 8.5 200C8.5 174.265 15.7197 141.933 26.5577 119.074C49.375 71.268 89.0593 35.6448 138.203 18.9674L138.206 18.9665C156.458 12.7509 181.586 8.5 200 8.5C217.045 8.5 243.273 12.6608 258.7 17.8687L258.709 17.8716L258.718 17.8745C267.081 20.6296 281.75 26.8726 288.846 30.5178C292.54 32.4631 298.854 36.3318 304.912 40.2709C311.001 44.2297 316.626 48.1268 318.992 50.1143L318.997 50.1186C343.04 70.2038 357.615 88.6281 370.754 115.498L370.757 115.505C374.059 122.206 377.625 130.772 380.516 138.626C383.427 146.533 385.566 153.488 386.127 157.069C386.433 159.208 387.042 162.761 387.56 165.044C389.099 172.123 389.975 185.566 390.075 199.156C390.175 212.761 389.493 226.072 388.054 232.883L388.052 232.893C387.901 233.623 387.769 234.354 387.657 234.976C387.601 235.289 387.549 235.575 387.503 235.818C387.497 235.849 387.491 235.879 387.486 235.908C386.292 235.006 384.472 233.348 381.658 230.599C379.34 228.335 376.446 225.433 372.801 221.776C371.094 220.064 369.222 218.187 367.168 216.132L343.768 192.732L339.5 188.464V188.588C339.218 188.302 338.919 187.999 338.603 187.68C335.913 184.959 332.023 181.038 327.222 176.212C317.62 166.559 304.367 153.282 289.765 138.729L236.768 85.7322L232.5 81.4645V87.5V140.8V194V196.5H235H288C302.602 196.5 315.857 196.475 325.463 196.425C330.265 196.4 334.161 196.369 336.86 196.331C337.927 196.316 338.814 196.3 339.5 196.283V209.3V221.5H253.5H165H162.5V224V263V302V304.513L165.013 304.5L203.813 304.3L203.819 304.3L242.519 304L244.937 303.981L244.999 301.564L245.299 289.864L245.299 289.864L245.599 278.064L245.664 275.5H243.1H216H191.5V263V250.5H231H270.5V289.5V328.5H204.3H135.5H129.464L133.732 332.768L164.732 363.768L191.464 390.5H189.9C187.835 390.5 185.929 390.451 184.529 390.378C183.824 390.342 183.278 390.301 182.914 390.262C182.861 390.256 182.815 390.25 182.777 390.246C182.637 390.188 182.508 390.146 182.414 390.118C182.208 390.056 181.98 390.002 181.763 389.956C181.319 389.862 180.746 389.763 180.096 389.665C178.796 389.47 177.08 389.265 175.242 389.112C171.676 388.714 167.109 388.029 165.054 387.562C162.769 387.043 159.203 386.432 157.062 386.126C151.111 385.226 139.039 380.979 126.676 375.736C114.345 370.506 102.202 364.49 96.1315 360.25ZM137.5 224V221.5H135H97.5C87.1902 221.5 77.799 221.575 70.979 221.7C67.5724 221.763 64.7907 221.839 62.852 221.924C61.8891 221.967 61.1 222.014 60.5361 222.066C60.2663 222.091 59.9807 222.123 59.7338 222.169C59.6295 222.189 59.4083 222.233 59.1668 222.324C59.0604 222.364 58.7915 222.47 58.5047 222.687C58.2778 222.859 57.5 223.512 57.5 224.7C57.5 225.247 57.6841 225.651 57.7225 225.735L57.7255 225.742C57.7908 225.886 57.8567 225.996 57.8911 226.051C57.9629 226.166 58.0328 226.259 58.0698 226.308C58.1516 226.414 58.2436 226.523 58.3239 226.616C58.4924 226.81 58.7235 227.064 59 227.362C59.5586 227.964 60.3674 228.814 61.3837 229.87C63.4195 231.986 66.323 234.964 69.8027 238.512C76.7638 245.609 86.0489 255.003 95.3507 264.374C104.653 273.744 113.975 283.095 121.011 290.104C124.528 293.608 127.477 296.53 129.568 298.579C130.613 299.602 131.451 300.415 132.041 300.975C132.333 301.253 132.58 301.483 132.766 301.649C132.855 301.729 132.957 301.818 133.054 301.896C133.098 301.931 133.183 301.998 133.288 302.068C133.338 302.101 133.442 302.168 133.58 302.237L133.586 302.24C133.649 302.272 134.095 302.5 134.7 302.5C135.898 302.5 136.548 301.707 136.71 301.49C136.919 301.209 137.019 300.95 137.053 300.856C137.133 300.641 137.167 300.457 137.177 300.402C137.205 300.252 137.219 300.11 137.226 300.027C137.243 299.836 137.257 299.595 137.268 299.332C137.291 298.793 137.312 298.02 137.331 297.05C137.369 295.105 137.4 292.302 137.425 288.856C137.475 281.96 137.5 272.453 137.5 262V224ZM176.268 156.768L178.036 155L176.268 153.232L157.268 134.232L138.268 115.232L137.536 114.5H136.5H112.3H88H85.5V117V155.5V194V196.5H88H111.8H135.5H136.536L137.268 195.768L156.768 176.268L176.268 156.768ZM175.732 192.232L171.464 196.5H177.5H191.3H205H207.5V194V180.5C207.5 176.792 207.475 173.398 207.424 170.924C207.399 169.691 207.367 168.664 207.328 167.933C207.308 167.576 207.284 167.242 207.252 166.977C207.238 166.86 207.212 166.664 207.16 166.459C207.14 166.377 207.079 166.141 206.941 165.874C206.875 165.744 206.723 165.473 206.443 165.203C206.151 164.922 205.56 164.5 204.7 164.5C204.106 164.5 203.669 164.72 203.607 164.751L203.602 164.754C203.467 164.819 203.367 164.883 203.322 164.913C203.225 164.976 203.152 165.033 203.123 165.056C203.054 165.11 202.994 165.163 202.957 165.195C202.876 165.267 202.779 165.357 202.677 165.452C202.469 165.647 202.178 165.925 201.82 166.272C201.101 166.967 200.079 167.967 198.833 169.194C196.34 171.649 192.936 175.029 189.232 178.732L175.732 192.232Z"
          stroke="#9265B8"
          stroke-width="5"
        />
        <path
          d="M138 223.509L138.009 221.02L135.52 221L97.3196 220.7L97.3131 220.7L61.5 220.513V155V89.5H103.3H146.562L174.529 117.565L174.532 117.568L203.232 146.268L207.5 150.536V144.5V115.8V89.5H219.5H231.5V140.5V194V196.5H234H288H339.5V208.3V220.228L289.272 220.8L289.265 220.8C260.374 221.2 220.486 221.5 200.8 221.5H165H162.5V224V263V302V304.5H165H204H243H245.5V302V289.5V277V274.5H243H216H191.5V262.5V250.5H230.5H269.5V289.5V328.5H203.6H137.609L137.8 277.309L138 223.509ZM207.5 166.5V160.464L203.232 164.732L189.732 178.232C186.022 181.942 182.632 185.408 180.164 188.002C178.932 189.296 177.916 190.388 177.202 191.19C176.848 191.587 176.545 191.94 176.32 192.222C176.212 192.358 176.089 192.518 175.982 192.682C175.93 192.76 175.849 192.889 175.772 193.047L175.768 193.055C175.726 193.139 175.5 193.593 175.5 194.2C175.5 195.592 176.53 196.274 176.725 196.399C177.051 196.607 177.369 196.714 177.538 196.766C177.911 196.882 178.335 196.956 178.714 197.011C179.51 197.125 180.589 197.214 181.835 197.284C184.349 197.425 187.774 197.5 191.5 197.5H205H207.5V195V180.8V166.5ZM176.268 156.768L178.036 155L176.268 153.232L156.768 133.732L137.268 114.232L136.536 113.5H135.5H111.8H88H85.5V116V155V194V196.5H88H111.8H135.5H136.536L137.268 195.768L156.768 176.268L176.268 156.768Z"
          stroke="white"
          stroke-width="5"
        />
      </svg>
    </div>
  )
}

export default Logo
