import React from 'react';
import {CONFIG} from './../../Config'

const SiteLogo = ({logo=null, link = '/'}) => {
    return (
        <a class="navbar-brand" href={link}>
            {logo && <img src={logo} />}
            {!logo && CONFIG.projectName}
        </a>
    )
}

export default SiteLogo;