import React, { useState, useRef, useEffect } from 'react';
import { NavDropdown } from 'react-bootstrap';

const Dropdownaccount = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        // Xử lý sự kiện click bên ngoài để đóng dropdown-menu
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        // Đăng ký sự kiện click bên ngoài khi dropdown-menu mở
        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        // Cleanup function
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <li className="nav-item main_item_menu dropdown dmenu d-none d-md-block">
            <NavDropdown
                title="ACCOUNT"
                id="navbardrop3"
                show={isOpen} // Truyền giá trị show để điều khiển hiển thị dropdown-menu
                onClick={toggleDropdown} // Sử dụng onClick để toggle dropdown-menu khi click vào nút
                ref={dropdownRef} // Thêm ref để xác định vùng dropdown-menu
            >
                <div className="main_item_menu_sub sm-menu" aria-labelledby="navbardrop3">
                    <NavDropdown.Item href="/login">Login</NavDropdown.Item>
                    <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                </div>
            </NavDropdown>
        </li>
    );
};

export default Dropdownaccount;
