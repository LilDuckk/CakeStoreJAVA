import axiosAdmin from './axiosAdmin';
import queryString from 'query-string';

const ProductApi = {
    getProducts: async (page, limit = 20) => {
        try {
            page = page - 1;
            const query = queryString.stringify({ page, limit });
            const response = await axiosAdmin.get(`/product/list?${query}`);
            return response.data; // Return the entire response data from the API
        } catch (error) {
            console.error('Error fetching products', error);
            throw error;
        }
    },

    getProductById: async (id) => {
        const res = await axiosAdmin.get(`/product/${id}`);
        return res.data;
    },

    insertProduct: async (productData) => {
        try {
            const formData = new FormData();
            formData.append('categoryID', productData.categoryID);
            formData.append('name', productData.name);
            formData.append('price', productData.price);
            if (productData.thumbnail) {
                formData.append('thumbnail', productData.thumbnail);
            }
            const response = await axiosAdmin.post('/product/insert', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data; // Return response data after successful insertion
        } catch (error) {
            console.error('Error inserting product', error);
            throw error;
        }
    },

    updateProduct: async (productId, formData) => {
        try {
            const response = await axiosAdmin.put(`/product/update/${productId}`, formData);
            return response.data; // Return response data after successful update
        } catch (error) {
            console.error('Error updating product', error);
            throw error;
        }
    },

    deleteProduct: async (productID) => {
        try {
            // This is a placeholder and should be replaced with the correct API call
            console.log(productID);
            const response = await axiosAdmin.delete(`/product/delete/${productID}`);
            return response.data; // Return response data after successful deletion
        } catch (error) {
            console.error('Error deleting product', error);
            throw error;
        }
    },
};

export default ProductApi;
