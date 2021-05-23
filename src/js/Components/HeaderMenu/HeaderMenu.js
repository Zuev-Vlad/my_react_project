import React from 'react';
import { CONFIG, MENU_ARRAY } from '../../Config';
import MenuItem from '../MenuItem/MenuItem';

const HeaderMenu = ({ArrayMenu = MENU_ARRAY}) => {

    return (
            <ul className="navbar-nav ml-auto">
                {ArrayMenu.map((menuItem, i) => (
                    <MenuItem 
                        key={i}
                        title={menuItem.title}
                        href = {menuItem.href}
                    />
                ))}
            </ul>
    )
}

export default HeaderMenu;