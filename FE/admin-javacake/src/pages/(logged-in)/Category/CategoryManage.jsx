import React, { useEffect, useState, useRef } from 'react';
import CategoryApi from '../../../api/CategoryApi';
import PageNavigate from '../../../components/PageNavigate';
import InsertCategory from './InsertCategory';
import UpdateCategory from './UpdateCategory';

const CategoryManage = () => {
    const [categories, setCategoryResponse] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [showInsertForm, setShowInsertForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State để hiển thị form update
    const [selectedCategory, setSelectedCategory] = useState(null); // State lưu sản phẩm đang được chọn để update
    const overlayRef = useRef(null); // Tham chiếu đến lớp overlay
    const insertFormRef = useRef(null); // Tham chiếu đến form InsertProduct
    const updateFormRef = useRef(null); // Tham chiếu đến form UpdateProduct

    useEffect(() => {
        // debugger
        const fetchCategories = async () => {
            try {
                const data = await CategoryApi.getCategories(currentPage);
                console.log('API Response:', data); // Log the API response for debugging
                if (data && data.categoryResponse) {
                    const filteredCategories = data.categoryResponse.filter(category => !category.delete);
                    setCategoryResponse(filteredCategories);
                    setTotalPages(data.totalPages);
                } else {
                    console.error('Data received from API is invalid:', data);
                }
            } catch (error) {
                console.error('Error fetching categories', error);
            }
        };

        fetchCategories();
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

    const handleInsertSuccess = (category) => {
        setShowInsertForm(false);
        setCategoryResponse(prev => [category, ...prev]);
        setCurrentPage(1); // Quay về trang đầu tiên để làm mới danh sách sản phẩm
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
    };

    const handleShowUpdateForm = (category) => {
        setSelectedCategory(category);
        setShowUpdateForm(true);
        document.body.style.overflow = 'hidden'; // Tạm ngừng cuộn khi form mở
    };

    const handleCloseUpdateForm = () => {
        setShowUpdateForm(false);
        setSelectedCategory(null);
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
    };

    const handleUpdateSuccess = (updatedCategory) => {
        if (updatedCategory && updatedCategory.categoryID) {
            // Update state of categories after successful update
            const updatedCategories = categories.map(category =>
                category.categoryID === updatedCategory.categoryID ? updatedCategory : category
            );
            setCategoryResponse(updatedCategories);
            setShowUpdateForm(false);
            setSelectedCategory(null);
            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        } else {
            console.error('Invalid updatedCategory:', updatedCategory);
        }
    };

    const handleClickOutsideForm = (e) => {
        if (insertFormRef.current && !insertFormRef.current.contains(e.target)) {
            setShowInsertForm(false);
            setShowUpdateForm(false); // Đóng cả form update nếu click bên ngoài
            setSelectedCategory(null); // Reset selected product

            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        }
        else if (updateFormRef.current && !updateFormRef.current.contains(e.target)) {
            setShowInsertForm(false);
            setShowUpdateForm(false); // Đóng cả form update nếu click bên ngoài
            setSelectedCategory(null); // Reset selected product

            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        }
    };

    const handleDeleteCategory = async (categoryID) => {
        try {
            await CategoryApi.deleteCategory(categoryID);
            setCurrentPage(1); // Quay về trang đầu tiên để làm mới danh sách sản phẩm
            setCategoryResponse(prev => prev.filter(p => p.categoryID !== categoryID));
        } catch (error) {
            console.error('Error deleting category', error);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideForm);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideForm);
        };
    }, []);

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
                        {showUpdateForm && selectedCategory && (
                            <>
                                <div className="overlay" ref={overlayRef}></div>
                                <div ref={updateFormRef}>
                                    <UpdateCategory category={selectedCategory} onSuccess={handleUpdateSuccess} onClose={handleCloseUpdateForm}
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
                                                <td>Danh mục</td>
                                                <td>Tên danh mục</td>
                                                <td>Cấp</td>
                                                <td>
                                                    <a className="btn btn-rounded btn-secondary" onClick={handleShowInsertForm}>Thêm mới</a>
                                                </td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {categories.map((category, index) => (
                                                <tr key={index}>
                                                    <td>{category.categoryID}</td>
                                                    <td>{category.categoryParent}</td>
                                                    <td>{category.name}</td>
                                                    <td>{category.lever}</td>
                                                    <td>
                                                        <button className="btn btn-rounded btn-warning" onClick={() => handleShowUpdateForm(category)}>
                                                            Chỉnh sửa
                                                        </button>
                                                        <button className="btn btn-rounded btn-danger" onClick={() => handleDeleteCategory(category.categoryID)}>
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

export default CategoryManage;
