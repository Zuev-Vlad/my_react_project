import React from 'react'
import { NavLink } from 'react-router-dom'

const MenuItem = ({title, href}) => {
    return (
        <li className="nav-item">
            <NavLink ac to={href}>
                {title}
            </NavLink>
        </li>
    )
}

export default MenuItem;