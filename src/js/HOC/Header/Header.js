import React from 'react';

const Header = (props) => {
    let classes = ['header'].concat(props.classes || [])
    return (
        <header className={classes.join(' ')}>
            {props.children}
        </header>
    )
}

export default Header;