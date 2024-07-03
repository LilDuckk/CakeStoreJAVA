import React from 'react'
import Loader from '../components/loader'
import Header from '../components/header'
import SideMenu from '../components/sidemenu'

function Contactus() {
    return (
        <div>
            <Loader />

            {/* // < !--START MAIN SECTION-- > */}
            <div class="main">
                <div class="body-overlay"></div>

                {/* <!--START PRODUCT SECTION--> */}
                <div class="product-section contact-body">

                    <Header />

                    {/* <!--START CONTACT US--> */}
                    <div class="contact-us-content">
                        <div class="slider-content">
                            <div id="map"></div>
                        </div>
                        <div class="contact-details">
                            <div class="container">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <h4 class="heading">Let's Get In Touch</h4>
                                        <ul class="contact-list">
                                            <li><span>Office Telephone :</span> 001 01085379709</li>
                                            <li><span>Mobile :</span> 001 63165370895</li>
                                            <li><span>Email :</span> admin@website.com</li>
                                            <li><span>Inquiries :</span> email@website.com</li>
                                            <li><span>Mon-Fri:</span> 9am to 6pm</li>
                                        </ul>
                                    </div>
                                    <div class="col-12 col-lg-8 offset-lg-2 text-center">
                                        <h4 class="heading">Do you have any Questions?</h4>
                                        <div class="contact-form">
                                            <form class="contact-form" id="contact-form-data">
                                                <div class="row my-form">
                                                    <div class="col-md-12 col-sm-12 mb-2">
                                                        <div id="result"></div>
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input class="form-control" name="userName" placeholder="Name" />
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input class="form-control" name="userEmail" placeholder="Email" />
                                                    </div>
                                                    <div class="col-12 col-md-4">
                                                        <input class="form-control" name="userSubject" placeholder="Subject" />
                                                    </div>
                                                    <div class="col-12">
                                                        <textarea class="form-control" name="userMessage" placeholder="Message"
                                                            rows="7"></textarea>
                                                    </div>
                                                    <div class="col-12 text-center">
                                                        <button class="btn our-btn btn-gradient rounded-pill contact_btn"
                                                            type="button">Contact Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div class="col-12 text-center footer_rights">
                                        <p class="text-center">&copy; 2019 MegaOne. Made With Love by <a class="web-link"
                                            href="http://www.themesindustry.com/" target="_blank">Themesindustry</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--END CONTACT US--> */}


                    <SideMenu />

                </div>
                {/* <!--END PRODUCT SECTION--> */}

            </div>
            {/* <!--END MAIN SECTION-- > */}

        </div>
    )
}

export default Contactus