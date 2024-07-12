import React, { useState, useEffect } from 'react';
import ProductApi from '../../../api/ProductApi';

const UpdateProduct = ({ product, onSuccess, onClose }) => {
    const [categoryID, setCategoryID] = useState(product.categoryID);
    const [productName, setProductName] = useState(product.name);
    const [productPrice, setProductPrice] = useState(product.price);
    const [productThumbnail, setProductThumbnail] = useState(null); // Store File object for thumbnail
    const [thumbnailPreview, setThumbnailPreview] = useState(''); // URL or base64 of current thumbnail

    useEffect(() => {
        if (product.thumbnail) {
            const fullThumbnailUrl = `http://localhost:2330/uploads/${product.thumbnail}`; // URL endpoint serving static files
            console.log('Current thumbnail:', fullThumbnailUrl); // Log the current thumbnail URL or base64 string
            setThumbnailPreview(fullThumbnailUrl);
        }
    }, [product]);

    const handleUpdateProduct = async (e) => {
        debugger
        const fullThumbnailUrl = `http://localhost:2330/uploads/${product.thumbnail}`;
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("categoryID", categoryID);
            formData.append("name", productName);
            formData.append("price", productPrice);
            if (productThumbnail) {
                formData.append("thumbnail", productThumbnail); // Send file object if a new file is selected
            }

            const res = await ProductApi.updateProduct(product.productID, formData);
            onSuccess(res.product); // Call parent component callback to update state
            onClose();
        } catch (error) {
            console.error('Error updating product', error);
        }
    };

    const handleThumbnailChange = (e) => {
        const file = e.target.files[0];
        setProductThumbnail(file);

        // Preview the image
        const reader = new FileReader();
        reader.onloadend = () => {
            setThumbnailPreview(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            // Use current thumbnail preview if no new file selected
            setThumbnailPreview(thumbnailPreview);
        }
    };

    return (
        <div className="insert-product-modal card">
            <h3>Chỉnh sửa</h3>
            <form onSubmit={handleUpdateProduct}>
                <div className="form-group">
                    <label>Category ID:</label>
                    <input
                        type="text"
                        value={categoryID}
                        onChange={(e) => setCategoryID(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Tên sản phẩm:</label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Giá:</label>
                    <input
                        type="text"
                        value={productPrice}
                        onChange={(e) => setProductPrice(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Ảnh:</label>
                    {thumbnailPreview && (
                        <img src={thumbnailPreview} alt="Thumbnail Preview" style={{ maxWidth: '500px', height: '300px', marginTop: '10px' }} />
                    )}
                    <input
                        type="file"
                        onChange={handleThumbnailChange}
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

export default UpdateProduct;
