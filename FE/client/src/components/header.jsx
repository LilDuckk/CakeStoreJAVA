import React from 'react'
import Dropdownaccount from './dropdownaccount';
import Dropdowncart from './dropdowncart';

function Header() {

    return (
        <div>
            {/* <!--START HEADER NAVBAR--> */}
            <header class="contact-us-header">
                <div class="container container-setting">
                    <div class="row justify-content-center about_us_nav">
                        <nav class="navbar navbar-expand contact-us-nav navbar-light bg-light">
                            <a href="..\index-product.html" class="navbar-brand"> <img src="img\logo.png" alt="logo" /></a>

                            <div class="menu-tog d-block d-lg-none" id="sidemenu_toggle1">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                                <ul class="navbar-nav ml-auto header-nav">
                                    <Dropdownaccount />
                                    <Dropdowncart />
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            {/* <!-- END HEADER NAVBAR --> */}
        </div>
    )
}

export default Header