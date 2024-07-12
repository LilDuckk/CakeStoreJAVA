import React, { useState, useEffect } from 'react';
import UserApi from '../../../api/UserApi';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateUser = ({ user, onSuccess, onClose }) => {
    const [userName, setuserName] = useState('');
    const [roleID, setroleID] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [userGender, setuserGender] = useState('');
    const [userAddress, setuserAddress] = useState('');
    const [userBirthDate, setuserBirthDate] = useState(new Date());

    useEffect(() => {
        if (user) {
            setuserName(user.userName);
            setroleID(user.roleID);
            setphoneNumber(user.phoneNumber);
            setuserGender(user.userGender);
            setuserAddress(user.userAddress);
            setuserBirthDate(user.userBirthDate);
        }
    }, [user]);

    const handleUpdateUser = async (e) => {
        debugger
        e.preventDefault();
        try {
            const updateData = {
                userName,
                roleID,
                phoneNumber,
                userGender,
                userAddress,
                userBirthDate
            };

            const res = await UserApi.updateUser(user.userID, updateData);
            onSuccess(res.user); // Call parent component callback to update state
            onClose();
        } catch (error) {
            console.error('Error updating user', error);
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
            <h3>Chỉnh sửa</h3>
            <form onSubmit={handleUpdateUser}>
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
                <div className="form-group">
                    <button type="submit" className="btn btn-rounded btn-success">
                        Lưu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateUser;
