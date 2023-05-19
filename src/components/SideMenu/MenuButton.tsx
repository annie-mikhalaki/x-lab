import React from 'react'
import { NavLink, useLocation } from 'react-router-dom';

import Arrow from '../icons/Arrow'
import IconProps from '../icons/IconInterface'
import classes from './SideMenu.module.scss'

type MenuItem = {
    title: string
    Icon: ({ width, height }: IconProps) => JSX.Element,
}

interface MenuButtonProps extends MenuItem {
    url?: string
    subItems?: Array<MenuItem>
    open?: boolean
    onClick?: () => void
}

const MenuButton = (props: MenuButtonProps) => {
    const { pathname } = useLocation()
    const { title, url, Icon, subItems, open, onClick } = props
    const hasSubItems = !!subItems?.length

    const menuButtonContent = <>
        <div className={classes.sideMenuIcon}>
            <Icon />
        </div>
        <div className={classes.sideMenuText}>{title}</div>
        {hasSubItems &&
            <div className={`${classes.sideMenuArrow} ${open ? '' : classes.down}`}>
                <Arrow />
            </div>
        }
        {pathname === url &&
            <div className={classes.menuItemSelected} />
        }
    </>

    return (
        url
            ? <NavLink to={url} className={classes.sideMenuItem}>{menuButtonContent}</NavLink>
            : <div className={classes.sideMenuItem} onClick={onClick}>{menuButtonContent}</div>
    )
}

export default MenuButton