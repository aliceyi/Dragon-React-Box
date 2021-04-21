import * as React from 'react'

function SvgIconArrow(props) {
    const path = {
        left: 'M15.1 18.48L7 12l8.1-6.48v2.56L10.2 12l4.9 3.92v2.56z',
        right: 'M8 18.5l8-6.5-8-6.5v2.569L12.838 12 8 15.931V18.5z',
        up: 'M18.48 15L12 6.899 5.519 15H8.08L12 10.1l3.92 4.9h2.56z',
        down: 'M5.519 7.9l6.48 8.1 6.481-8.1h-2.56L12 12.798l-3.92-4.9H5.52z',
    }
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d={path[props.dir || 'right']}
                fill="currentColor"
                fillRule="evenodd"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default SvgIconArrow
