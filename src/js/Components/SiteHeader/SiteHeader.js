import React from 'react'
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import SiteLogo from "../SiteLogo/SiteLogo";


const SiteHeader = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <SiteLogo />
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <HeaderMenu/>
            </div>
        </nav>
        
    )
}
export default SiteHeader;
