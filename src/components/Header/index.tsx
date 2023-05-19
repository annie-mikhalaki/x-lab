
import React from 'react'

import WrenchIcon from '../../components/icons/Wrench'
import UserIcon from '../../components/icons/User'
import classes from './Header.module.scss'

const Header = () => {
    return (
        <header className={classes.Header}>
            <div className={classes.logo}>
                <WrenchIcon />
                <div className={classes.logoText}>Wrench CRM</div>
            </div>
            <div className={classes.user}>
                <UserIcon />
                <div className={classes.userText}>Имя Фамилия</div>
            </div>
        </header>
    )
}

export default Header