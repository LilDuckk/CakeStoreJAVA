import React from 'react'
import Header from '../../components/Header';
import Button from '../../components/Button';
import '../../assets/Style.css';

function Admin() {
    return (
        <div className="app">
            <Header />
            <main>
                <h2>Danh sách đơn giặt</h2>
                <div className="search-bar">
                    <input type="text" placeholder="Search" />
                </div>
                <div className="user-info">
                    <span>Hello, Welcome Here</span>
                    <i className="bell-icon"></i>
                    <i className="user-icon"></i>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Tên khách hàng</th>
                            <th>Khối lượng tổng</th>
                            <th>Tổng tiền đơn giặt</th>
                            <th>Trạng thái</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>123</td>
                            <td>
                                <Button text="Thêm mới" className="btn-add" />
                                <Button text="Chỉnh sửa" className="btn-edit" />
                                <Button text="Xóa" className="btn-delete" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>
        </div>
    )
}

export default Admin