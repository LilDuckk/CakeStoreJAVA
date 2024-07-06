import React from 'react';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/ql-tai-khoan':
                return 'Quản Lý Tài Khoản';
            case '/ql-muc':
                return 'Quản Lý Danh Mục';
            case '/ql-viec-lam':
                return 'Quản Lý Việc Làm';
            case '/ql-don-hang':
                return 'Quản Lý Đơn Hàng';
            case '/ql-san-pham':
                return 'Quản Lý Sản Phẩm';
            case '/ql-cong-thuc':
                return 'Quản Lý Công Thức';
            default:
                return 'Trang Chính';
        }
    };

    return (
        <header className="header">
            <h2>{getTitle()}</h2>
            <div className="user-info">
                <span>Hello, Welcome Here</span>
                <i className="bell-icon"></i>
                <i className="user-icon"></i>
            </div>
        </header>
    );
};

export default Header;
