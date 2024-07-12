import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AccountManage from './Account/AccountManage';
import OrderManage from './Order/OrderManage';
import ProductManage from './Product/ProductManage';
import RecipeManage from './Recipe/RecipeManage';
import CategoryManage from './Category/CategoryManage';
import AuthRoute from '../../api/AuthRoute';

function Admin() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<div>Welcome to Admin Dashboard</div>} />
                <Route path="/ql-tai-khoan" element={<AuthRoute><AccountManage /></AuthRoute>} />
                <Route path="/ql-muc" element={<AuthRoute><CategoryManage /></AuthRoute>} />
                <Route path="/ql-don-hang" element={<AuthRoute><OrderManage /></AuthRoute>} />
                <Route path="/ql-san-pham" element={<AuthRoute><ProductManage /></AuthRoute>} />
                <Route path="/ql-cong-thuc" element={<AuthRoute><RecipeManage /></AuthRoute>} />
            </Routes>
        </div>
    );
}

export default Admin;
