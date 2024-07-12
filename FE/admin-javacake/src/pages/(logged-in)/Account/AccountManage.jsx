import React, { useEffect, useState, useRef } from 'react';
import UserApi from '../../../api/UserApi';
import PageNavigate from '../../../components/PageNavigate';
import InsertCategory from './InsertUser';
import UpdateCategory from './UpdateUser';

const AccountManage = () => {
    const [users, setAccount] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [showInsertForm, setShowInsertForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State để hiển thị form update
    const [selectedUser, setSelectedUser] = useState(null); // State lưu sản phẩm đang được chọn để update
    const overlayRef = useRef(null); // Tham chiếu đến lớp overlay
    const insertFormRef = useRef(null); // Tham chiếu đến form InsertProduct
    const updateFormRef = useRef(null); // Tham chiếu đến form UpdateProduct

    useEffect(() => {
        // debugger
        const fetchusers = async () => {
            try {
                const data = await UserApi.getUsers(currentPage);
                console.log('API Response:', data); // Log the API response for debugging
                if (data && data.userResponeList) {
                    const filteredusers = data.userResponeList.filter(user => !user.delete);
                    setAccount(filteredusers);
                    setTotalPages(data.totalPages);
                } else {
                    console.error('Data received from API is invalid:', data);
                }
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };

        fetchusers();
    }, [currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleShowInsertForm = () => {
        setShowInsertForm(true);
        document.body.style.overflow = 'hidden'; // Tạm ngừng cuộn khi form mở
    };

    const handleCloseInsertForm = () => {
        setShowInsertForm(false);
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
    };

    const handleInsertSuccess = (user) => {
        setShowInsertForm(false);
        setAccount(prev => [user, ...prev]);
        setCurrentPage(1); // Quay về trang đầu tiên để làm mới danh sách sản phẩm
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        window.location.reload();
    };

    const handleShowUpdateForm = (user) => {
        setSelectedUser(user);
        setShowUpdateForm(true);
        document.body.style.overflow = 'hidden'; // Tạm ngừng cuộn khi form mở
    };

    const handleCloseUpdateForm = () => {
        setShowUpdateForm(false);
        setSelectedUser(null);
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
    };

    const handleUpdateSuccess = (updatedCategory) => {
        if (updatedCategory && updatedCategory.userID) {
            // Update state of users after successful update
            const updatedusers = users.map(user =>
                user.userID === updatedCategory.userID ? updatedCategory : user
            );
            setAccount(updatedusers);
            setShowUpdateForm(false);
            setSelectedUser(null);
            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        } else {
            console.error('Invalid updatedCategory:', updatedCategory);
        }
    };

    const handleClickOutsideForm = (e) => {
        if (insertFormRef.current && !insertFormRef.current.contains(e.target)) {
            setShowInsertForm(false);
            setShowUpdateForm(false); // Đóng cả form update nếu click bên ngoài
            setSelectedUser(null); // Reset selected product

            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        }
        else if (updateFormRef.current && !updateFormRef.current.contains(e.target)) {
            setShowInsertForm(false);
            setShowUpdateForm(false); // Đóng cả form update nếu click bên ngoài
            setSelectedUser(null); // Reset selected product

            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        }
    };

    const handleDeleteUser = async (userID) => {
        try {
            await UserApi.deleteUser(userID);
            setCurrentPage(1); // Quay về trang đầu tiên để làm mới danh sách sản phẩm
            setAccount(prev => prev.filter(p => p.userID !== userID));
        } catch (error) {
            console.error('Error deleting user', error);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideForm);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideForm);
        };
    }, []);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    const formatRoleName = (roleName) => {
        switch (roleName) {
            case 'ROLE_ADMIN':
                return 'Quản trị viên';
            case 'ROLE_USER':
                return 'Khách hàng';
            default:
                return roleName; // Nếu có các vai trò khác, bạn có thể xử lý tại đây
        }
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <h3>Danh sách đơn giặt</h3>
                        <hr />
                        <PageNavigate
                            totalPages={totalPages}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                        {showInsertForm && (
                            <>
                                <div className="overlay" ref={overlayRef}></div>
                                <div ref={insertFormRef}>
                                    <InsertCategory onSuccess={handleInsertSuccess} onClose={handleCloseInsertForm} />
                                </div>
                            </>
                        )}
                        {showUpdateForm && selectedUser && (
                            <>
                                <div className="overlay" ref={overlayRef}></div>
                                <div ref={updateFormRef}>
                                    <UpdateCategory user={selectedUser} onSuccess={handleUpdateSuccess} onClose={handleCloseUpdateForm}
                                    />
                                </div>
                            </>
                        )}
                        <div className="bootstrap-data-table-panel">
                            <div className="dataTables_filter">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className="table-info">
                                            <tr>
                                                <td>ID</td>
                                                <td>Tên</td>
                                                <td>Quyền</td>
                                                <td>Số điện thoại</td>
                                                <td>Giới tính</td>
                                                <td>Địa chỉ</td>
                                                <td>Ngày sinh</td>
                                                <td>
                                                    <a className="btn btn-rounded btn-secondary" onClick={handleShowInsertForm}>Thêm mới</a>
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user, index) => (
                                                <tr key={index}>
                                                    <td>{user.userID}</td>
                                                    <td>{user.userName}</td>
                                                    <td>{formatRoleName(user.roleName)}</td>
                                                    <td>{user.phoneNumber}</td>
                                                    <td>{user.userGender}</td>
                                                    <td>{user.userAddress}</td>
                                                    <td>{formatDate(user.userBirthDate)}</td>
                                                    <td>
                                                        <button className="btn btn-rounded btn-warning" onClick={() => handleShowUpdateForm(user)}>
                                                            Chỉnh sửa
                                                        </button>
                                                        <button className="btn btn-rounded btn-danger" onClick={() => handleDeleteUser(user.userID)}>
                                                            Xóa
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <PageNavigate
                                        totalPages={totalPages}
                                        currentPage={currentPage}
                                        onPageChange={handlePageChange}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- /# card --> */}
                </div>
                {/* <!-- /# column --> */}
            </div>
            {/* <!-- /# row --> */}

            <div className="row">
                <div className="col-lg-12">
                    <div className="footer">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AccountManage;
