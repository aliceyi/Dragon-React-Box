import * as React from 'react'

function SvgIconTick(props) {
    return (
        <svg width={24} height={24} viewBox="0 0 24 24" {...props}>
            <g fill="none" fillRule="evenodd">
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                    d="M8.71 15.366l-3.345-3.121L4 13.707l4.71 4.395 11.399-10.64L18.744 6z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    )
}

export default SvgIconTick
