import React from 'react'

const SiteBody = (props) => {
    let classes = ['site-body'].concat(props.classes || [])
    return (
        <body className={classes.join(' ')}>
            {props.children}
        </body>
    )
}

export default SiteBody;