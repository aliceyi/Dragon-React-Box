import * as React from "react";

function SvgIconArrow(props) {
  const path = {
    left: "M12 5L8 9.333l4 4.334",
    right: "M8 5l4 4.333-4 4.334",
    up: "M14.333 11.333l-4.333-4-4.333 4",
    down: "M5.667 7.333l4.333 4 4.333-4",
  }
  return (
    <svg width="24" height="24" viewBox="0 0 19 19" {...props}>
      <path
        stroke="currentColor"
        strokeWidth={2}
        d={path[props.dir || "right"]}
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default SvgIconArrow;
