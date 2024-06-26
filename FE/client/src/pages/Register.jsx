import React from 'react'
import Loader from '../components/loader'
import Header from '../components/header'
import SideMenu from '../components/sidemenu'

function Register() {
    return (
        <div>
            <Loader />

            {/* // < !--START MAIN SECTION-- > */}
            <div class="main">
                <div class="body-overlay"></div>

                {/* <!--START PRODUCT SECTION--> */}
                <div class="product-section contact-body">

                    <Header />

                    {/* <!-- START MAIN CONTENT  --> */}
                    <div class="contact-us-content">
                        <div class="slider-content">
                            <div class="parallax-slide banner-slide" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/project-banner6.jpg)` }}>
                            </div>
                            {/* <!--  START MANAGE CONTEND  --> */}
                            <div class="about_content">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12  col-lg-8 offset-lg-2 text-center wow slideInUp" data-wow-duration="2s">
                                            <h1 class="heading">Registeration</h1>
                                            <p class="para_text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolores explicabo laudantium, omnis provident quam reiciendis voluptatum?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--  END MANAGE CONTEND  --> */}

                            {/* <!--  START FORM SECTION  --> */}
                            <div class="offset-lg-3 col-lg-6 col-md-12 col-sm-12 pr-lg-0 whitebox">
                                <div class="widget logincontainer">
                                    <h3 class="bottom35 text-center text-md-left">Create Your Account </h3>
                                    <form class="getin_form border-form" id="register">
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12">
                                                <div class="form-group bottom35">
                                                    <label for="registerName" class="d-none"></label>
                                                    <input class="form-control" type="text" placeholder="Full Name:" required="" id="registerName" />
                                                </div>
                                            </div>
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
                                                    <label for="registerPassConfirm" class="d-none"></label>
                                                    <input class="form-control" type="password" placeholder="Confirm Password:" required="" id="registerPassConfirm" />
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
                                                <button type="submit" class="button btn btn-gradient w-100 rounded-pill register-btn ">Register</button>
                                                <p class="top20"> Already have an account? &nbsp;<a href="/login" class="defaultcolor">Sign In</a> </p>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <!--  END FORM SECTION  --> */}

                            {/* <!--  START FOOTER SECTION  --> */}
                            <div class="row">
                                <div class="col-12 text-center footer_rights pb-5">
                                    <p>&copy; 2019 MegaOne. Made With Love by <a class="web-link" href="http://www.themesindustry.com/" target="_blank">Themesindustry</a></p>
                                </div>
                            </div>
                            {/* <!--  END FOOTER SECTION  --> */}

                        </div>
                    </div>
                    {/* <!-- END MAIN CONTENT  --> */}


                    <SideMenu />

                </div>
                {/* <!--END PRODUCT SECTION--> */}

            </div>
            {/* <!--END MAIN SECTION-- > */}

        </div>
    )
}

export default Register