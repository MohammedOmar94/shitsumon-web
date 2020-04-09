import React from "react";

export default function SomaliaFlag({ className, onClick }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 81 54"
    >
      <rect fill="#4189DD" width="81" height="54"/>
      <g transform="translate(40.5 27) scale(13)">
      <g id="t">
      <polygon id="w" fill="#FFF" points="0,0 0,1 .5,1" transform="translate(0 -1) rotate(18)"/>
      <use xlinkHref="#w" transform="scale(-1 1)"/>
      </g>
      <use xlinkHref="#t" transform="rotate(72)"/>
      <use xlinkHref="#t" transform="rotate(-72)"/>
      <use xlinkHref="#t" transform="rotate(144)"/>
      <use xlinkHref="#t" transform="rotate(-144)"/>
      </g>
    </svg>
  )
}