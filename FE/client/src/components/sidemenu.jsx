import React, { useState } from 'react';
import OverlayMenu from './overlaymenu';

const SideMenu = () => {
    const [isOverlayMenuVisible, setOverlayMenuVisible] = useState(false);

    const handleToggleSideMenu = () => {
        setOverlayMenuVisible(!isOverlayMenuVisible);
    };

    return (
        <div>
            {/* START SIDEBAR SECTION */}
            <div className="sidebar-section">
                <div className="side-nav-btn site-nav-alignment" id="sidemenu_toggle" onClick={handleToggleSideMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className="social-icons">
                    <li><a href="#." className="facebook_bg_hvr2 wow slideInLeft" data-wow-duration="2.1s"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                    <li><a href="#." className="twitter_bg_hvr2 wow slideInRight" data-wow-duration="2.1s"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#." className="linkdin_bg_hvr2 wow slideInLeft" data-wow-duration="2.1s"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                    <li><a href="#." className="instagram_bg_hvr2 wow slideInRight" data-wow-duration="2.1s"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            {/* END SIDEBAR SECTION */}

            {/* Overlay Menu */}
            {isOverlayMenuVisible && <OverlayMenu onClose={handleToggleSideMenu} />}
        </div>
    );
};

export default SideMenu;
