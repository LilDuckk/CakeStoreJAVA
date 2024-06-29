import React, { useState } from 'react';

const OverlayMenu = ({ onClose }) => {
    const [visibleSubMenu, setVisibleSubMenu] = useState(null);

    const handleNavLinkClick = (event) => {
        const targetId = event.target.id;
        if (targetId) {
            setVisibleSubMenu(targetId);
        }
    };

    const handleGoBackClick = () => {
        setVisibleSubMenu(null);
    };

    return (
        <div className="side-menu-nav open-side-menu">
            <h1 className="sidenav-bg-text">GIẶT LÀ VOX</h1>
            <div className="close-side-menu" onClick={onClose}>
                <i className="lni-close cross-sign" id="close-side-menu-nav"></i>
            </div>
            <nav className={visibleSubMenu ? "" : "nav-styling"}>
                <ul className={`side-bar ${visibleSubMenu ? "nav-disappear" : ""}`}>
                    <li className="nav-item main-item">
                        <a className="nav-link nav-appear" href="#">Home</a>
                    </li>
                    <li className="nav-item main-item">
                        <a className="nav-link nav-appear" href="#">Product</a>
                    </li>
                    <li className="nav-item main-item">
                        <a className="nav-link nav-appear" href="/login">SignIn</a>
                    </li>
                    <li className="nav-item main-item">
                        <a className="nav-link nav-appear" href="#">About Us</a>
                    </li>
                    <li className="nav-item main-item">
                        <a className="nav-link nav-appear" href="#">Contact Us</a>
                    </li>
                </ul>
            </nav>
            <div className="side-footer">
                <ul className="social-icons-simple">
                    <li><a href="#." className="facebook_bg_hvr2 wow fadeInUp"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                    <li><a href="#." className="twitter_bg_hvr2 wow fadeInDown"><i className="fab fa-twitter" aria-hidden="true"></i></a> </li>
                    <li><a href="#." className="linkdin_bg_hvr2 wow fadeInUp"><i className="fab fa-linkedin-in" aria-hidden="true"></i></a></li>
                    <li><a href="#." className="instagram_bg_hvr2 wow fadeInDown"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                </ul>
            </div>
        </div>
    );
};

export default OverlayMenu;
