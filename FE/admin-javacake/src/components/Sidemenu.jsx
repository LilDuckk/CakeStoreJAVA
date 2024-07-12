import React, { useState } from 'react';
import { FaBars, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
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
                            <li><Link to="/ql-tai-khoan"><i className="icon icon-home-minimal"></i><span className="nav-text">Quản Lý Tài Khoản</span></Link></li>
                            <li><Link to="/ql-muc"><i className="icon icon-folder-15"></i><span className="nav-text">Quản Lý Danh Mục</span></Link></li>
                            <li><Link to="/ql-don-hang"><i className="icon icon-single-content-03"></i><span className="nav-text">Quản Lý Đơn Hàng</span></Link></li>
                            <li><Link to="/ql-san-pham"><i className="icon icon-cart-simple"></i><span className="nav-text">Quản Lý Sản Phẩm</span></Link></li>
                            <li><Link to="/ql-cong-thuc"><i className="icon icon-app-store"></i><span className="nav-text">Quản Lý Công Thức</span></Link></li>
                            <li className="nav-label">Extra</li>
                            <li>
                                <a className="has-arrow" onClick={toggleListPages}>
                                    <i className="icon icon-single-copy-06"></i><span className="nav-text">Pages</span>
                                </a>
                                <ul className={`pages ${isPagesOpen ? 'active' : ''}`}>
                                    <li><a href="/">Register</a></li>
                                    <li><a href="/login">Login</a></li>
                                    <li>
                                        <a className="has-arrow" onClick={toggleListError}>Error</a>
                                        <ul className={`errorList ${isErrorOpen ? 'active' : ''}`}>
                                            <li><a href="#">Error 400</a></li>
                                            <li><a href="#">Error 403</a></li>
                                            <li><a href="#">Error 404</a></li>
                                            <li><a href="#">Error 500</a></li>
                                            <li><a href="#">Error 503</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="/">Lock Screen</a></li>
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
