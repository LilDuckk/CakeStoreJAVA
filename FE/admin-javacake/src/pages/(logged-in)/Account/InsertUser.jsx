// InsertProduct.js
import React, { useState } from 'react';
import UserApi from '../../../api/UserApi';
import '../../../assets/Style.css'; // Import CSS file for custom styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const InsertUser = ({ onSuccess, onClose }) => {
    const [userName, setuserName] = useState('');
    const [roleID, setroleID] = useState('');
    const [userPassword, setuserPassword] = useState('');
    const [retypePassword, setretypePassword] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [userGender, setuserGender] = useState('');
    const [userAddress, setuserAddress] = useState('');
    const [userBirthDate, setuserBirthDate] = useState(new Date());

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newData = { userName, roleID, phoneNumber, userGender, userAddress, userBirthDate, userPassword, retypePassword };
            const category = await UserApi.register(newData);
            onSuccess(category); // Call onSuccess callback to refresh product list
            onClose(); // Call onClose callback to close the form
            // Clear form after successful submission
            setuserName('');
            setroleID('');
            setuserPassword('');
            setretypePassword('');
            setphoneNumber('');
            setuserGender('');
            setuserAddress('');
            setuserBirthDate('');
        } catch (error) {
            console.error('Error inserting category:', error);
            // Handle error here (e.g., display error message)
        }
    };

    const roleOptions = [
        { value: 1, label: 'Quản trị viên' },
        { value: 2, label: 'Khách hàng' },
        // Thêm các phân quyền khác nếu cần
    ];

    const handleRoleChange = (e) => {
        setroleID(e.target.value); // Cập nhật giá trị phân quyền khi người dùng chọn
    };

    return (
        <div className="insert-product-modal card">
            <h3>Thêm mới danh mục</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Tên người dùng</label>
                    <input
                        type="text"
                        className="form-control"
                        value={userName}
                        onChange={(e) => setuserName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Phân Quyền</label>
                    <select
                        className="form-control"
                        value={roleID}
                        onChange={handleRoleChange}
                        required
                    >
                        <option value="">Chọn phân quyền</option>
                        {roleOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group">
                    <label>Mật khẩu</label>
                    <input
                        type="text"
                        className="form-control"
                        value={userPassword}
                        onChange={(e) => setuserPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Nhập lại mật khẩu</label>
                    <input
                        type="text"
                        className="form-control"
                        value={retypePassword}
                        onChange={(e) => setretypePassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Số điện thoại</label>
                    <input
                        type="text"
                        className="form-control"
                        value={phoneNumber}
                        onChange={(e) => setphoneNumber(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Giới tính</label>
                    <input
                        type="text"
                        className="form-control"
                        value={userGender}
                        onChange={(e) => setuserGender(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Địa chỉ</label>
                    <input
                        type="text"
                        className="form-control"
                        value={userAddress}
                        onChange={(e) => setuserAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Ngày sinh</label>
                    <DatePicker
                        selected={userBirthDate}
                        onChange={(date) => setuserBirthDate(date)}
                        dateFormat="dd/MM/yyyy" // Định dạng ngày tháng
                        className="form-control"
                        required
                    />
                </div>
                <div className='form-button'>
                    <button type="submit" className="btn btn-rounded btn-primary">
                        Thêm Tài Khoản
                    </button>
                    <button type="button" className="btn btn-rounded btn-secondary" onClick={onClose}>
                        Đóng
                    </button>
                </div>

            </form >
        </div >
    );
};

export default InsertUser;
