import React from 'react'
import SideMenu from '../components/sidemenu'
import Overlaymenu from '../components/overlaymenu'
import Loader from '../components/loader'
import Header from '../components/header'
import Footer from '../components/footer'

function Home() {
    return (
        <div>
            <Loader />

            {/* // < !--START MAIN-- > */}
            <div class="main">
                <div class="body-overlay" data-value="dismis"></div>

                {/* <!--START PRODUCT SECTION --> */}
                <div class="product-section">

                    <Header />

                    <div class="row inner-product-sec">
                        <div class="left-area">

                        </div>
                        <div class="right-area">
                            <div id="particles"></div>
                            <div class="container container-setting">
                                <div class="row text-center">
                                    {/* <!--  START PRODUCT SLIDER  --> */}
                                    <div class="col-sm-12 col-md-8 col-lg-12 box1 text-center order-2">
                                        <div class="ribbon">
                                            <div class="wrap">
                                                <span class="ribbon6"></span>
                                            </div>
                                        </div>
                                        {/* <!-- Swiper--> */}
                                        <div class="swiper-container" id="product-slider" style={{ overflow: "hidden" }}>
                                            <div class="swiper-wrapper wow slideInLeft" data-wow-duration="2s">
                                                <div class="swiper-slide">
                                                    <a onClick="slide_window('model-window4');" style={{ cursor: "pointer" }}><img
                                                        src="product\img\featured_product.png" alt="featured product 4" /></a>
                                                </div>
                                                <div class="swiper-slide">
                                                    <a onClick="slide_window('model-window4');" style={{ cursor: "pointer" }}><img
                                                        src="product\img\featured_product1.png"
                                                        alt="featured product 4" /></a>
                                                </div>
                                                <div class="swiper-slide">
                                                    <a onClick="slide_window('model-window4');" style={{ cursor: "pointer" }}><img
                                                        src="product\img\featured_product2.png"
                                                        alt="featured product 4" /></a>
                                                </div>
                                                <div class="swiper-slide">
                                                    <a onClick="slide_window('model-window4');" style={{ cursor: "pointer" }}><img
                                                        src="product\img\featured_product3.png"
                                                        alt="featured product 4" /></a>
                                                </div>
                                            </div>
                                            {/* <!-- Add Pagination --> */}
                                        </div>
                                        <div class="swiper-dots"></div>
                                    </div>
                                    {/* <!--  END PRODUCT SLIDER  --> */}

                                    <div class="col-sm-12 featured_title d-sm-block d-md-block d-lg-none order-1">
                                        <h4 class="text-center text-lg-left"><span>Giặt Sấy</span> Vox</h4>
                                        <p class="featured_description">LẤY ĐỒ VÀ TRẢ ĐỒ TẬN NƠI ( miễn phí trong bán kính 3km
                                            ).</p>
                                        <div class="button-1 rounded-pill">
                                            <a href="product\product-listing-light.html" class="rounded-pill">ĐẶT ĐỒ</a>
                                        </div>
                                    </div>
                                </div>

                                <div class="featured_products">
                                    <div class="row justify-content-center">
                                        <div class="col-12 col-md-3"></div>
                                        <div class="col-12 col-lg-9 offset-lg-3 detail-area">
                                            <div class="row">
                                                <div class="col-12 featured_title d-none d-lg-block">
                                                    <h4 class="text-center text-md-left"><span>Giặt Sấy</span> Vox</h4>
                                                    <p class="">LẤY ĐỒ VÀ TRẢ ĐỒ TẬN NƠI ( miễn phí trong bán kính 3km
                                                        ).</p>
                                                    <div class="button-1 rounded-pill">
                                                        <a href="product\product-listing-light.html" class="rounded-pill">ĐẶT
                                                            ĐỒ</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-12 featured_items wow fadeIn" data-wow-duration="2s">
                                                    <div class="featured-items owl-carousel owl-theme">
                                                        <div class="item pr-2">
                                                            <a
                                                                onClick="open_model_window('model-window1');">
                                                                <div class="img-holder">
                                                                    <img src="product\img/giatla1.png" alt="items" />
                                                                    <div class="plus"><i class="lni-plus"></i></div>
                                                                </div>
                                                            </a>
                                                            <p class="text-center product-price">$103.00</p>
                                                        </div>
                                                        <div class="item pr-2">
                                                            <a
                                                                onClick="open_model_window('model-window2');">
                                                                <div class="img-holder">
                                                                    <img src="product\img/giatla2.png" alt="items" />
                                                                    <div class="plus"><i class="lni-plus"></i></div>
                                                                </div>
                                                            </a>
                                                            <p class="text-center product-price">$103.00</p>
                                                        </div>
                                                        <div class="item pr-2">
                                                            <a
                                                                onClick="open_model_window('model-window3');">
                                                                <div class="img-holder">
                                                                    <img src="product\img/giatla3.png" alt="items" />
                                                                    <div class="plus"><i class="lni-plus"></i></div>
                                                                </div>
                                                            </a>
                                                            <p class="text-center product-price">$103.00</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Footer />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--END PRODUCT SECTION --> */}

                <SideMenu />

                {/* <Overlaymenu /> */}
            </div>
            {/* <!--END MAIN-- > */}

            {/* < !--LOAD MODEL WINDOW-- > */}
            <div id="modal-data"></div>
            {/* <!--END LOAD MODEL WINDOW-- > */}
        </div>
    )
}

export default Home