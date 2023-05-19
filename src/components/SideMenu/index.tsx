import React from 'react'

import classes from './SideMenu.module.scss'
import SideMenuItem from './SideMenuItem'
import HomeIcon from '../icons/Home'
import SearchIcon from '../icons/Search'
import TableIcon from '../icons/Table'
import CalendarIcon from '../icons/Calendar'
import MapIcon from '../icons/Map'
import WidgetIcon from '../icons/Widget'
import SettingsIcon from '../icons/Settings'
import UserSettingsIcon from '../icons/UserSettings'
import FinanceIcon from '../icons/Finance'
import LogOutIcon from '../icons/LogOut'

const menuItems = [
    { title: 'Главная', url: '/', Icon: HomeIcon, subItems: [] },
    { title: 'Поиск адресов', url: '/address', Icon: SearchIcon, subItems: [] },
    { title: 'Таблицы', url: '/tables', Icon: TableIcon, subItems: [] },
    { title: 'Календарь', url: '/calendar', Icon: CalendarIcon, subItems: [] },
    { title: 'Карты', url: '/maps', Icon: MapIcon, subItems: [] },
    { title: 'Виджеты', url: '/widgets', Icon: WidgetIcon, subItems: [] },
    {
        title: 'Настройки', Icon: SettingsIcon, subItems: [
            { title: 'Настройки пользователя', url: '/user-settings', Icon: UserSettingsIcon },
            { title: 'Управление финансами', url: '/finance-management', Icon: FinanceIcon }
        ]
    },
    { title: 'Выход', url: '/logout', Icon: LogOutIcon, subItems: [] }
]

const SideMenu = () => {
    return (
        <nav className={classes.SideMenu}>
            <div className={classes.sideTitleMenu}>Меню</div>
            <div className={classes.sideMenuButtons}>
                {
                    menuItems.map((item, index) => <SideMenuItem key={`menuItem${index}`} {...item} />)
                }
            </div>
        </nav>
    )
}

export default SideMenu