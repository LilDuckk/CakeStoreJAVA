import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


function Leftsidebar() {
    return (
        // < !--START LEFT SIDEBAR SECTION-- >
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
                    <p class="price-num" style={{ color: "#0b2e13" }}>Price: <span id="min-p"></span>  <span id="max-p"></span></p>
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
        // {/* <!--END  LEFT SIDEBAR SECTION-- > */}
    )
}

export default Leftsidebar