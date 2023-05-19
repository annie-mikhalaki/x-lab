
import React, { useState } from 'react'

import IconProps from '../icons/IconInterface'
import MenuButton from './MenuButton'
import classesSideMenu from './SideMenu.module.scss'

type MenuItem = {
    url?: string
    title: string
    Icon: ({ width, height }: IconProps) => JSX.Element,
}

interface SideMenuButtonProps extends MenuItem {
    subItems?: Array<MenuItem>
}

const SideMenuItem = (props: SideMenuButtonProps) => {
    const [open, setOpen] = useState(true);
    const { subItems } = props
    const hasSubItems = !!subItems?.length

    function handleMenuButtonClick() {
        setOpen(!open)
    }

    return (
        <>
            <MenuButton {...props} {...hasSubItems ? { open, onClick: handleMenuButtonClick } : null} />
            {hasSubItems && open && (
                <div className={classesSideMenu.sideMenuButtons}>
                    {subItems.map((subItem, index) => <MenuButton key={`subItem${index}`} {...subItem} />)}
                </div>
            )}
        </>
    )
}

export default SideMenuItem