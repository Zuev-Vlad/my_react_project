import React from 'react';

const Footer = (props) => {
    let classes = ['footer'].concat(props.classes || [])
    return (
        <footer className={classes.join(' ')}>
            {props.children}
        </footer>
    )
}

export default Footer;