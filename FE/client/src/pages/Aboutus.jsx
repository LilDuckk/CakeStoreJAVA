import React from 'react'
import Loader from '../components/loader'
import Header from '../components/header'
import SideMenu from '../components/sidemenu'

function Aboutus() {
    return (
        <div>
            <Loader />

            {/* // < !--START MAIN SECTION-- > */}
            <div class="main">
                <div class="body-overlay"></div>

                {/* <!--START PRODUCT SECTION--> */}
                <div class="product-section contact-body">

                    <Header />

                    {/* <!--START ABOUT US SECTION --> */}
                    <div class="contact-us-content">
                        <div class="slider-content">
                            <div class="parallax-slide banner-slide" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/project-banner20.png)` }}>
                            </div>
                            <div class="about_content" data-wow-duration="2s">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12  col-lg-8 offset-lg-2 text-center wow slideInUp"
                                            data-wow-duration="2s">
                                            <h1 class="heading">Vox Laundry - Giặt Sấy 48 Phố Kẻ Vẽ</h1>
                                            <p class="para_text">CAM KẾT :
                                                📌100% giặt riêng đồ của từng khách
                                                📌Nước giặt - Nước xả an toàn cho sức khỏe: Ariel, Omo, Surf, Comfort, Downy,
                                                Hygiene
                                                📌Phân loại chất liệu, màu sắc, ký hiệu tem mác đồ giặt theo yêu cầu
                                                📌Báo giá trước và sau khi giặt </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="about_services">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-12 col-lg-4 wow bounceInUp" data-wow-duration="2s">
                                            <div class="service-card text-center">
                                                <div class="image-holder">
                                                    <i class="lni-pencil-alt"></i>
                                                </div>
                                                <h3 class="service-card-heading">CAM KẾT</h3>
                                                <p class="service-card-detail">
                                                    Số lượng không át chất lượng
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4 wow bounceInUp" data-wow-duration="2s">
                                            <div class="service-card text-center">
                                                <div class="image-holder">
                                                    <i class="lni-cog"></i>
                                                </div>
                                                <h3 class="service-card-heading">NHẬN GIẶT</h3>
                                                <p class="service-card-detail">
                                                    Quần áo thường, cao cấp, comple, váy, áo da, áo dài...
                                                </p>
                                            </div>
                                        </div>
                                        <div class="col-12 col-lg-4 wow bounceInUp" data-wow-duration="2s">
                                            <div class="service-card text-center">
                                                <div class="image-holder">
                                                    <i class="lni-code"></i>
                                                </div>
                                                <h3 class="service-card-heading">Địa chỉ</h3>
                                                <p class="service-card-detail">
                                                    Số 48 Kẻ Vẽ, Đông Ngạc, Bắc Từ Liêm, Hà Nội
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!--END ABOUT US SECTION --> */}


                    <SideMenu />

                </div>
                {/* <!--END PRODUCT SECTION--> */}

            </div>
            {/* <!--END MAIN SECTION-- > */}

        </div>
    )
}

export default Aboutus