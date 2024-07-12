// InsertProduct.js
import React, { useState } from 'react';
import CategoryApi from '../../../api/CategoryApi';
import '../../../assets/Style.css'; // Import CSS file for custom styles

const InsertCategory = ({ onSuccess, onClose }) => {
    const [categoryParent, setCategoryParent] = useState('');
    const [lever, setlever] = useState('');
    const [name, setname] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newData = { categoryParent, lever, name };
            const category = await CategoryApi.insertCategory(newData);
            onSuccess(category); // Call onSuccess callback to refresh product list
            onClose(); // Call onClose callback to close the form
            // Clear form after successful submission
            setCategoryParent('');
            setlever('');
            setname('');
        } catch (error) {
            console.error('Error inserting category:', error);
            // Handle error here (e.g., display error message)
        }
    };

    return (
        <div className="insert-product-modal card">
            <h3>Thêm mới danh mục</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Mục cha</label>
                    <input
                        type="text"
                        className="form-control"
                        value={categoryParent}
                        onChange={(e) => setCategoryParent(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Tên mục</label>
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Cấp độ</label>
                    <input
                        type="text"
                        className="form-control"
                        value={lever}
                        onChange={(e) => setlever(e.target.value)}
                        required
                    />
                </div>
                <div className='form-button'>
                    <button type="submit" className="btn btn-rounded btn-primary">
                        Thêm danh mục
                    </button>
                    <button type="button" className="btn btn-rounded btn-secondary" onClick={onClose}>
                        Đóng
                    </button>
                </div>

            </form >
        </div >
    );
};

export default InsertCategory;
