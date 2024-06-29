import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import '../assets/css/style2.css'

const Dropdowncart = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="nav-item dropdowns cart-item">
            <NavDropdown
                title={<i className="lni-cart"><span className="badge badge-custom-setting">2</span></i>}
                id="cartDropdown"
                show={isOpen} // Trạng thái hiển thị dropdown
                onClick={toggleDropdown} // Xử lý sự kiện click để toggle dropdown
            >
                <div className="sm-menu mini-cart">
                    <div className="mini-cart-header">
                        <h4>Shopping Cart</h4>
                    </div>
                    <div className="mini-cart-body">
                        <div className="inner-card">
                            <div className="media">
                                <div className="img-holder ml-1 mr-2">
                                    <img src="product/img/m1.jpg" className="align-self-center" alt="cartitem" />
                                </div>
                                <div className="media-body mt-auto mb-auto">
                                    <h5 className="name">Shoes</h5>
                                    <p className="category">Adidas Shoes Lastest</p>
                                    <p className="price"><span>$20</span>(x1) <a href="#"> <i className="fa fa-trash dustbin"></i></a></p>
                                </div>
                            </div>
                            {/* Các item khác trong giỏ hàng */}
                        </div>
                    </div>
                    <div className="mini-cart-footer">
                        <div className="subtotal">
                            <span className="total-title">Total: </span>
                            <span className="total-price">
                                <span className="Price-amount">
                                    $135
                                </span>
                            </span>
                        </div>
                        <div className="actions">
                            <button type="button" className="btn view-bag rounded-pill">View Bag</button>
                            <button type="button" className="btn view-cart btn-medium btn-gradient rounded-pill">Checkout</button>
                        </div>
                    </div>
                </div>
            </NavDropdown>
        </li>
    );
};

export default Dropdowncart;
