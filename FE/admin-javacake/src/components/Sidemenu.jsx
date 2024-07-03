import React, { useState } from 'react';
import { FaBars, FaArrowRight } from 'react-icons/fa';
import "../assets/Sidemenu.css"

const SideMenu = () => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isErrorOpen, setErrorIsOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuToggled(!isMenuToggled);
    };

    const toggleListError = () => {
        setErrorIsOpen(!isErrorOpen); // Đảo ngược trạng thái hiển thị danh sách
    };

    const toggleListPages = () => {
        setIsPagesOpen(!isPagesOpen); // Đảo ngược trạng thái hiển thị danh sách
        if (!isPagesOpen) {
            setErrorIsOpen(false);
        }
    };

    return (
        <div className={`side-menu ${isMenuToggled ? 'menu-toggled' : ''}`}>
            <div className='nav-side'>
                <div className="nav-control" onClick={handleMenuToggle}>
                    {isMenuToggled ? <FaArrowRight className="menu-icon" /> : <FaBars className="menu-icon" />}
                </div>
            </div>
            <div id="main-wrapper" className={isMenuToggled ? 'menu-toggle' : ''}>
                <div className="quixnav">
                    <div className="quixnav-scroll">
                        <ul className="metismenu" id="menu">
                            <li className="nav-label">Main Menu</li>
                            <li><a href="./QLTaiKhoan.html"><i className="icon icon-home-minimal"></i><span className="nav-text">Quản Lý Tài Khoản</span></a></li>
                            <li><a href="./QLNhanVien.html"><i className="icon icon-single-04"></i><span className="nav-text">Quản Lý Nhân Viên</span></a></li>
                            <li><a href="./QLViecLam.html"><i className="icon icon-single-content-03"></i><span className="nav-text">Quản Lý Việc Làm</span></a></li>
                            <li><a href="./QLDonGiat.html"><i className="icon icon-cart-simple"></i><span className="nav-text">Quản Lý Đơn Giặt</span></a></li>
                            <li><a href="./QLThongTinKH.html"><i className="icon icon-app-store"></i><span className="nav-text">Quản Lý Thông Tin Khách Hàng</span></a></li>
                            <li><a href="./QLKho.html"><i className="icon icon-folder-15"></i><span className="nav-text">Quản Lý Kho</span></a></li>
                            <li><a href="./QLKhuyenMai.html"><i className="icon icon-share-66"></i><span className="nav-text">Quản Lý Khuyến Mãi</span></a></li>
                            <li><a href="./QLGiaoDien.html"><i className="icon icon-edit-72"></i><span className="nav-text">Quản Lý Giao Diện</span></a></li>
                            <li><a href="./QLGiatLa.html"><i className="icon icon-attach-87"></i><span className="nav-text">Quản Lý Giặt Là</span></a></li>
                            <li className="nav-label">Extra</li>
                            <li>
                                <a className="has-arrow" onClick={toggleListPages}>
                                    <i className="icon icon-single-copy-06"></i><span className="nav-text">Pages</span>
                                </a>
                                <ul className={`pages ${isPagesOpen ? 'active' : ''}`}>
                                    <li><a href="./page-register.html">Register</a></li>
                                    <li><a href="./page-login.html">Login</a></li>
                                    <li>
                                        <a className="has-arrow" onClick={toggleListError}>Error</a>
                                        <ul className={`errorList ${isErrorOpen ? 'active' : ''}`}>
                                            <li><a href="./page-error-400.html">Error 400</a></li>
                                            <li><a href="./page-error-403.html">Error 403</a></li>
                                            <li><a href="./page-error-404.html">Error 404</a></li>
                                            <li><a href="./page-error-500.html">Error 500</a></li>
                                            <li><a href="./page-error-503.html">Error 503</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="./page-lock-screen.html">Lock Screen</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideMenu;
