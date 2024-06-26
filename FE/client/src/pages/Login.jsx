import React from 'react'
import Loader from '../components/loader'
import Header from '../components/header'
import SideMenu from '../components/sidemenu'

function Login() {
    return (
        <div>
            <Loader />

            {/* // < !--START MAIN SECTION-- > */}
            <div class="main">
                <div class="body-overlay"></div>

                {/* <!--START PRODUCT SECTION--> */}
                <div class="product-section contact-body">

                    <Header />

                    {/* <!-- START LOGIN PAGE --> */}
                    <div class="contact-us-content">

                        <div class="slider-content">

                            <div class="parallax-slide banner-slide" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/project-banner12.jpg)` }}></div>

                            {/* <!--  START HEADING TITLE --> */}
                            <div class="about_content">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12  col-lg-8 offset-lg-2 text-center wow slideInUp" data-wow-duration="2s">
                                            <h1 class="heading">Member's Area</h1>
                                            <p class="para_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident quam reiciendis voluptatum?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  END HEADING TITLE --> */}

                            {/* <!-- START LOGIN FORM --> */}
                            <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 pr-lg-0 whitebox">
                                <div class="widget logincontainer">
                                    <h3 class="bottom35 text-center text-md-left">Log In to Your Account </h3>
                                    <form class="getin_form border-form" id="register">
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12">
                                                <div class="form-group bottom35">
                                                    <label for="registerEmail" class="d-none"></label>
                                                    <input class="form-control" type="email" placeholder="Email:" required="" id="registerEmail" />
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12">
                                                <div class="form-group bottom35">
                                                    <label for="registerPass" class="d-none"></label>
                                                    <input class="form-control" type="password" placeholder="Password:" required="" id="registerPass" />
                                                </div>
                                            </div>

                                            <div class="col-md-12 col-sm-12">
                                                <div class="form-group bottom35">
                                                    <div class="form-check text-left">
                                                        <div class="custom-control custom-checkbox">
                                                            <input type="checkbox" class="custom-control-input" id="defaultUnchecked" />
                                                            <label class="custom-control-label" for="defaultUnchecked">Remember me on this device</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-12">
                                                <button type="submit" class="button btn btn-gradient w-100 rounded-pill register-btn ">Log In</button>
                                                <p class="top20"> Not account yet? &nbsp;<a href="/register" class="defaultcolor">Sign In</a> </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!-- END LOGIN FORM --> */}

                            {/* <!-- START FOOTER NOTES --> */}
                            <div class="row">
                                <div class="col-12 text-center footer_rights pb-5">
                                    <p>&copy; 2019 MegaOne. Made With Love by <a class="web-link" href="http://www.themesindustry.com/" target="_blank">Themesindustry</a></p>
                                </div>
                            </div>
                            {/* <!-- END FOOTER NOTES --> */}

                        </div>

                    </div>
                    {/* <!-- END  LOGIN PAGE --> */}


                    <SideMenu />

                </div>
                {/* <!--END PRODUCT SECTION--> */}

            </div>
            {/* <!--END MAIN SECTION-- > */}

        </div>
    )
}

export default Login