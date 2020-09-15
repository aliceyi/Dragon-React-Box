import * as React from "react";

function SvgIconWarning(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <g fillRule="nonzero" fill="currentColor">
        <path d="M10 18.182a8.182 8.182 0 100-16.364 8.182 8.182 0 000 16.364zm0 1.292A9.474 9.474 0 1110 .526a9.474 9.474 0 010 18.948z" />
        <path d="M10 12.584a.861.861 0 110 1.722.861.861 0 010-1.722zm0-6.89c.476 0 .861.367.861.82v3.917c0 .453-.385.82-.861.82s-.861-.367-.861-.82V6.514c0-.453.385-.82.861-.82z" />
      </g>
    </svg>
  );
}

export default SvgIconWarning;
