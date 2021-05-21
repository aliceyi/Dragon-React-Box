import * as React from 'react'

function SvgIconGuide(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 48 48" {...props}>
            <path
                d="M40 4v40H8V12a8 8 0 018-8h24zm-4 4h-6v16l-6-2-6 2V8h-2a4 4 0 00-4 4v28h24V8zM26 8h-4v10.45l2-.666 2 .666V8z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    )
}

export default SvgIconGuide
