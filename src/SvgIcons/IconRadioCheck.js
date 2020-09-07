import * as React from "react";

function SvgIconRadioCheck(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="#222" fillRule="evenodd">
        <path
          d="M12 19.5a7.5 7.5 0 110-15 7.5 7.5 0 010 15zm0-1a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
          fillRule="nonzero"
        />
        <circle cx={12.06} cy={12.06} r={4} />
      </g>
    </svg>
  );
}

export default SvgIconRadioCheck;
