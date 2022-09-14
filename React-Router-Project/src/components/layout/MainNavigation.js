

import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation() {
  return (
    <header className={classes.header}>
        <div className={classes.logo}>Great Quotes</div>
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink to='/quotes'>
                        All quotes
                        </NavLink>
                    </li>

                <li>
                    <NavLink to='/new-quote'>
                       Add a quote 
                        </NavLink>
                    </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation