import React from 'react'
import IconProps from './IconInterface'

const Arrow = ({width = 13, height = 12}: IconProps) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.06699 0.749999C6.25944 0.416666 6.74056 0.416667 6.93301 0.75L12.5622 10.5C12.7546 10.8333 12.5141 11.25 12.1292 11.25H0.870834C0.485934 11.25 0.245372 10.8333 0.437822 10.5L6.06699 0.749999Z" fill="#A8A8A8"/>
        </svg>   
    )
}

export default Arrow