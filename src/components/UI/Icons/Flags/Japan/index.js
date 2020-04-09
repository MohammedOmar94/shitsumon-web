import React from "react";

export default function JapanFlag({ className, onClick }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600">
      <rect fill="#fff" height="600" width="900"/>
      <circle fill="#bc002d" cx="450" cy="300" r="180"/>
    </svg>
  )
}