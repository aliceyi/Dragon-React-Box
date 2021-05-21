import * as React from 'react'

function SvgIconMoney(props) {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
            <g fill="none" fillRule="evenodd">
                <path
                    d="M15.9 5.7V4H9.1v1.7H5.7V21h13.6V5.7h-3.4zm-5.1 0h3.4v1.7h-3.4V5.7zm6.8 13.6H7.4V7.4h1.7v1.7h6.8V7.4h1.7v11.9z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
                <g fill="currentColor">
                    <path d="M9.95 12.762h5.1v1.275h-5.1zM9.95 14.622h5.1v1.275h-5.1z" />
                    <path d="M11.863 17.376v-4.614h1.275v4.614z" />
                    <path d="M11.396 13.415l-1.242-2.151 1.104-.638 1.242 2.151zM13.604 13.415l1.242-2.151-1.104-.638-1.242 2.151z" />
                </g>
            </g>
        </svg>
    )
}

export default SvgIconMoney
