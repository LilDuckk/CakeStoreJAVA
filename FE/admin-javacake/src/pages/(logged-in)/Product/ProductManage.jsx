import React, { useEffect, useState, useRef } from 'react';
import ProductApi from '../../../api/ProductApi';
import CategoryApi from '../../../api/CategoryApi';
import PageNavigate from '../../../components/PageNavigate';
import InsertProduct from './InsertProduct';
import UpdateProduct from './UpdateProduct'; // Import Component UpdateProduct
import '../../../assets/Style.css'; // Import CSS file for custom styles

const ProductManage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [showInsertForm, setShowInsertForm] = useState(false);
    const [showUpdateForm, setShowUpdateForm] = useState(false); // State để hiển thị form update
    const [selectedProduct, setSelectedProduct] = useState(null); // State lưu sản phẩm đang được chọn để update
    const overlayRef = useRef(null); // Tham chiếu đến lớp overlay
    const insertFormRef = useRef(null); // Tham chiếu đến form InsertProduct
    const updateFormRef = useRef(null); // Tham chiếu đến form UpdateProduct

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await ProductApi.getProducts(currentPage);
                console.log('API Response:', data);

                if (data && data.productResponses) {
                    const filteredProducts = data.productResponses.filter(product => !product.delete);
                    setProducts(filteredProducts);
                    setTotalPages(data.totalPage);
                } else {
                    console.error('Data received from API is invalid:', data);
                }
            } catch (error) {
                console.error('Error fetching products', error);
            }
        };

        fetchProducts();
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

    const handleInsertSuccess = (product) => {
        setShowInsertForm(false);
        setProducts(prev => [product, ...prev]);
        setCurrentPage(1); // Quay về trang đầu tiên để làm mới danh sách sản phẩm
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
    };

    const handleShowUpdateForm = (product) => {
        setSelectedProduct(product);
        setShowUpdateForm(true);
        document.body.style.overflow = 'hidden'; // Tạm ngừng cuộn khi form mở
    };

    const handleCloseUpdateForm = () => {
        setShowUpdateForm(false);
        setSelectedProduct(null);
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
    };

    const handleUpdateSuccess = (updatedProduct) => {
        // Update state of products after successful update
        const updatedProducts = products.map(product =>
            product.productID === updatedProduct.productID ? updatedProduct : product
        );
        setProducts(updatedProducts);
        setShowUpdateForm(false);
        setSelectedProduct(null);
        document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
    };

    const handleClickOutsideForm = (e) => {
        if (insertFormRef.current && !insertFormRef.current.contains(e.target)) {
            setShowInsertForm(false);
            setShowUpdateForm(false); // Đóng cả form update nếu click bên ngoài
            setSelectedProduct(null); // Reset selected product

            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        }
        else if (updateFormRef.current && !updateFormRef.current.contains(e.target)) {
            setShowInsertForm(false);
            setShowUpdateForm(false); // Đóng cả form update nếu click bên ngoài
            setSelectedProduct(null); // Reset selected product

            document.body.style.overflow = 'auto'; // Khôi phục cuộn khi form đóng
        }
    };

    const handleDeleteProduct = async (productID) => {
        try {
            await ProductApi.deleteProduct(productID);
            setCurrentPage(1); // Quay về trang đầu tiên để làm mới danh sách sản phẩm
            setProducts(prev => prev.filter(p => p.productID !== productID));
        } catch (error) {
            console.error('Error deleting product', error);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutsideForm);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideForm);
        };
    }, []);

    const fetchCategories = async () => {
        try {
            const data = await CategoryApi.getAllCategories(currentPage);
            console.log('API Response:', data); // Log the API response for debugging
            if (data && data.categoryResponse) {
                setCategories(data.categoryResponse);
                setTotalPages(data.totalPages);
            } else {
                console.error('Data received from API is invalid:', data);
            }
        } catch (error) {
            console.error('Error fetching categories', error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const getCategoryName = (categoryID) => {
        const category = categories.find(cat => cat.categoryID === categoryID);
        return category ? category.name : 'Unknown'; // Trả về tên category nếu tồn tại, nếu không trả về 'Unknown'
    };

    return (
        <div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <h3>Danh sách sản phẩm</h3>
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
                                    <InsertProduct onSuccess={handleInsertSuccess} onClose={handleCloseInsertForm} />
                                </div>
                            </>
                        )}
                        {showUpdateForm && selectedProduct && (
                            <>
                                <div className="overlay" ref={overlayRef}></div>
                                <div ref={updateFormRef}>
                                    <UpdateProduct product={selectedProduct} onSuccess={handleUpdateSuccess} onClose={handleCloseUpdateForm}
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
                                                <th>ID</th>
                                                <th>Danh mục</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Giá</th>
                                                <th>
                                                    <a className="btn btn-rounded btn-secondary" onClick={handleShowInsertForm}>Thêm mới</a>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map((product, index) => (
                                                <tr key={index}>
                                                    <td>{product.productID}</td>
                                                    <td>{getCategoryName(product.categoryID)}</td>
                                                    <td>{product.name}</td>
                                                    <td>{product.price}</td>
                                                    <td>
                                                        <button className="btn btn-rounded btn-warning" onClick={() => handleShowUpdateForm(product)}>
                                                            Chỉnh sửa
                                                        </button>
                                                        <button className="btn btn-rounded btn-danger" onClick={() => handleDeleteProduct(product.productID)}>
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
                </div>
            </div>
        </div>
    );
};

export default ProductManage;
