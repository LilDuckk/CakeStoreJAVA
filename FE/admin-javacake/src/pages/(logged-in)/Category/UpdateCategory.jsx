import React, { useState, useEffect } from 'react';
import CategoryApi from '../../../api/CategoryApi';

const UpdateCategory = ({ category, onSuccess, onClose }) => {
    const [categoryParent, setCategoryParent] = useState('');
    const [lever, setlever] = useState('');
    const [name, setname] = useState('');

    useEffect(() => {
        if (category) {
            setCategoryParent(category.categoryParent);
            setlever(category.lever);
            setname(category.name);
        }
    }, [category]);

    const handleUpdateCategory = async (e) => {
        debugger
        e.preventDefault();
        try {
            const updateData = {
                categoryParent,
                lever,
                name,
            };

            const res = await CategoryApi.updateCategory(category.categoryID, updateData);
            onSuccess(res.category); // Call parent component callback to update state
            onClose();
        } catch (error) {
            console.error('Error updating category', error);
        }
    };

    return (
        <div className="insert-product-modal card">
            <h3>Chỉnh sửa</h3>
            <form onSubmit={handleUpdateCategory}>
                <div className="form-group">
                    <label>Danh Mục Cha:</label>
                    <input
                        type="text"
                        value={categoryParent}
                        onChange={(e) => setCategoryParent(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Tên Danh Mục:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Cấp:</label>
                    <input
                        type="number"
                        value={lever}
                        onChange={(e) => setlever(e.target.value)}
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

export default UpdateCategory;
