// InsertProduct.js
import React, { useState } from 'react';
import ProductApi from '../../../api/ProductApi';
import '../../../assets/Style.css'; // Import CSS file for custom styles

const InsertProduct = ({ onSuccess, onClose }) => {
    const [categoryID, setCategoryID] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [thumbnail, setThumbnail] = useState(null);



    const handleFileChange = (e) => {
        setThumbnail(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newData = { categoryID, name, price, thumbnail };
            const product = await ProductApi.insertProduct(newData);
            onSuccess(product); // Call onSuccess callback to refresh product list
            onClose(); // Call onClose callback to close the form
            // Clear form after successful submission
            setCategoryID('');
            setName('');
            setPrice('');
            setThumbnail(null);
        } catch (error) {
            console.error('Error inserting product:', error);
            // Handle error here (e.g., display error message)
        }
    };

    return (
        <div className="insert-product-modal card">
            <h3>Thêm mới sản phẩm</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Category ID:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={categoryID}
                        onChange={(e) => setCategoryID(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Price:</label>
                    <input
                        type="text"
                        className="form-control"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Thumbnail:</label>
                    <input
                        type="file"
                        className="form-control"
                        onChange={handleFileChange}
                        required
                    />
                </div>
                <div className='form-button'>
                    <button type="submit" className="btn btn-rounded btn-primary">
                        Thêm sản phẩm
                    </button>
                    <button type="button" className="btn btn-rounded btn-secondary" onClick={onClose}>
                        Đóng
                    </button>
                </div>

            </form >
        </div >
    );
};

export default InsertProduct;
