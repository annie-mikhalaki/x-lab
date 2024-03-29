import React from 'react'
import IconProps from './IconInterface'

const CalendarIcon = ({ width = 32, height = 32 }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.10938 14.4H10.6649V17.6H7.10938V14.4ZM7.10938 20.8H10.6649V24H7.10938V20.8ZM14.2205 14.4H17.776V17.6H14.2205V14.4ZM14.2205 20.8H17.776V24H14.2205V20.8ZM21.3316 14.4H24.8872V17.6H21.3316V14.4ZM21.3316 20.8H24.8872V24H21.3316V20.8Z" fill="#1C1C1E"/>
            <path d="M3.55556 32H28.4444C30.4053 32 32 30.5648 32 28.8V6.4C32 4.6352 30.4053 3.2 28.4444 3.2H24.8889V0H21.3333V3.2H10.6667V0H7.11111V3.2H3.55556C1.59467 3.2 0 4.6352 0 6.4V28.8C0 30.5648 1.59467 32 3.55556 32ZM28.4444 9.6L28.4462 28.8H3.55556V9.6H28.4444Z" fill="#1C1C1E"/>
        </svg>
    )
}

export default CalendarIcon