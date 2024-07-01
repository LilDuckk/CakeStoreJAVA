import React from 'react'
import Loader from '../components/loader'
import Header from '../components/header'
import SideMenu from '../components/sidemenu'
import Leftsidebar from '../components/leftsidebar'

function Product() {
    return (
        <div>
            <Loader />

            {/* // < !--START MAIN SECTION-- > */}
            <div class="main">
                <div class="body-overlay"></div>

                {/* <!--START PRODUCT SECTION--> */}
                <div class="product-section contact-body">

                    <Header />

                    {/* <Leftsidebar /> */}

                    <div class="contact-us-content">

                        <div class="slider-content">

                            <div class="parallax-slide banner-slide paralax-data" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/product-listing-banner.jpg)` }}></div>


                            <div class="product-section-body">
                                <div class="row no-gutters">

                                    {/* <!-- START LEFT SIDEBAR SECTION --> */}
                                    <div class="col-12 col-lg-3 order-2 order-lg-1 bg-light sticky">
                                        <div id="product-filter-nav" class="product-filter-nav">
                                            <div class="product-category">
                                                <h5 class="filter-heading  text-center text-lg-left">Category</h5>
                                                <ul>
                                                    <li><a href="#">June </a><span>(2)</span></li>
                                                    <li><a href="#">July </a><span>(4)</span></li>
                                                    <li><a href="#">Augest </a><span>(2)</span></li>
                                                    <li><a href="#">March </a><span>(7)</span></li>
                                                    <li><a href="#">May </a><span>(9)</span></li>
                                                </ul>
                                            </div>
                                            <div class="product-price">
                                                <h5 class="filter-heading">Shop By</h5>
                                                <div id="slider-range"></div>
                                                <p class="price-num" style={{ color: '#0b2e13' }}>Price: <span id="min-p"></span>  <span id="max-p"></span></p>
                                            </div>


                                            <button class="btn our-btn btn-gradient rounded-pill d-block ml-auto mr-auto ml-lg-0">Filter</button>

                                            <div class="product-add">
                                                <div class="row no-gutters">
                                                    <div class="col-12">
                                                        <img src="img\add.jpg" alt="images" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row R-rite">
                                                <div class="col-12">
                                                    <p>&copy; 2019 MegaOne Made by <a class="web-link" href="http://www.themesindustry.com/" target="_blank">Themesindustry</a></p>
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    {/* <!-- END  LEFT SIDEBAR SECTION --> */}

                                    {/* <!-- START PRODUCT LISTING SECTION --> */}
                                    <div class="col-md-12 col-lg-9 order-1 order-lg-2">

                                        <div class="product-body">
                                            <nav aria-label="breadcrumb">
                                                <ol class="breadcrumb">
                                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                                    <li class="breadcrumb-item"><a href="#">categories</a></li>
                                                    <li class="breadcrumb-item" aria-current="page"><a href="#">sports</a></li>
                                                </ol>
                                            </nav>
                                            <div class="pro-detail-sec row">
                                                <div class="col-12">
                                                    <h4 class="pro-heading text-center text-lg-left"><span>Sports </span> Collection</h4>
                                                    <p class="pro-text text-center text-lg-left">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                                                </div>
                                            </div>

                                            {/* <!-- START DISPLAY PRODUCT --> */}
                                            <div class="product-list row">

                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p1.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <a class="btn our-btn q-btn rounded-pill" onclick="open_model_window1('model-window5');">QUICK VIEW</a>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Nike Sports</h4>
                                                            <p class="text-center p-item-price">$100.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p2.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <a class="btn our-btn q-btn rounded-pill" onclick="open_model_window1('model-window5');">QUICK VIEW</a>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Adidas Sports</h4>
                                                            <p class="text-center p-item-price">$107.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p3.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <a class="btn our-btn q-btn rounded-pill" href="product-detail.html">QUICK VIEW</a>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Formal Sports</h4>
                                                            <p class="text-center p-item-price">$100.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p4.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <a class="btn our-btn q-btn rounded-pill" href="product-detail.html">QUICK VIEW</a>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Another Sports</h4>
                                                            <p class="text-center p-item-price">$100.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p3.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <a class="btn our-btn q-btn rounded-pill" href="product-detail.html">QUICK VIEW</a>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Formal Sports</h4>
                                                            <p class="text -center p-item-price">$165.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p2.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <a class="btn our-btn q-btn rounded-pill" href="product-detail.html">QUICK VIEW</a>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Adidas Sports</h4>
                                                            <p class="text-center p-item-price">$107.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p1.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <button class="btn our-btn q-btn rounded-pill" onclick="open_model_window1('model-window6');">QUICK VIEW</button>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Another Sports</h4>
                                                            <p class="text-center p-item-price">$160.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-12 col-md-6 col-lg-3">
                                                    <div class="row product-item">
                                                        <div class="col-12 p-item-img">
                                                            <img src="img\product-imgs\p6.jpg" alt="images" />
                                                            <div class="p-item-overlay text-center d-flex justify-content-center align-items-center">
                                                                <div class="btn-container">
                                                                    <a class="btn our-btn q-btn rounded-pill" href="product-detail.html">QUICK VIEW</a>
                                                                    <a class="btn our-btn btn-gradient rounded-pill" href="shop-cart.html">ADD TO CART</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 p-item-detail">
                                                            <h4 class="text-center p-item-name">Nike Sports</h4>
                                                            <p class="text-center p-item-price">$100.00</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* <!-- END DISPLAY PRODUCT --> */}

                                            {/* <!-- START FEATURED FOOTER --> */}
                                            <div class="col-12 p-featured-footer">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <p class="text-center text-md-left">Neque porro quisquam est qui dolorem ipsum quia dolor sit velit. Neque porromrion quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
                                                    </div>
                                                    <div class="col-12 text-center text-lg-left">
                                                        <div class="row">
                                                            <div class="terms col-sm-12 col-md-4  col-lg-4">
                                                                <h4>Free Shipping</h4>
                                                                <p>GREAT FROM HEBES</p>
                                                            </div>
                                                            <div class="terms col-sm-12  col-md-4 col-lg-4">
                                                                <h4>Secure Payment</h4>
                                                                <p>100% SECURE PAYMENT</p>
                                                            </div>
                                                            <div class="terms col-sm-12 col-md-4  col-lg-4">
                                                                <h4>30 Days Return</h4>
                                                                <p>SIMPLY RETURN 3 DAYS</p>
                                                            </div>

                                                            <div class="col-md-12 d-block d-lg-none">
                                                                <p class="d-none d-lg-block">© 2019 MegaOne.  Made by Themes Industry</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- END FEATURED FOOTER --> */}
                                        </div>

                                    </div>
                                    {/* <!-- END PRODUCT LISTING SECTION --> */}

                                </div>
                            </div>


                        </div>
                    </div>


                    <SideMenu />

                </div>
                {/* <!--END PRODUCT SECTION--> */}

            </div>
            {/* <!--END MAIN SECTION-- > */}

        </div >
    )
}

export default Product