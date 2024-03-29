import React from 'react'
import IconProps from './IconInterface'

const WidgetIcon = ({ width = 32, height = 32 }: IconProps) => {
    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M28.8 5.94483H19.8624L23.5312 2.2676L21.2688 0L16 5.28091L10.7312 0L8.4688 2.2676L12.1376 5.94483H3.2C1.4352 5.94483 0 7.38333 0 9.15219V26.7926C0 28.5615 1.4352 30 3.2 30H28.8C30.5648 30 32 28.5615 32 26.7926V9.15219C32 7.38333 30.5648 5.94483 28.8 5.94483ZM3.2 26.7926V9.15219H28.8L28.8032 26.7926H3.2Z" fill="#1C1C1E"/>
        </svg>
    )
}

export default WidgetIcon