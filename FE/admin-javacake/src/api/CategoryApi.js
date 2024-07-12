import axiosAdmin from './axiosAdmin';
import queryString from 'query-string';

const CategoryApi = {
    getCategories: async (page, limit = 20) => {
        try {
            // page = 0;
            page = page - 1;
            const query = queryString.stringify({ page, limit });
            const response = await axiosAdmin.get(`/category/list?${query}`);
            return response.data; // Return the entire response data from the API
        } catch (error) {
            console.error('Error fetching categories', error);
            throw error;
        }
    },

    getAllCategories: async (page, limit = 100) => {
        try {
            // page = 0;
            page = page - 1;
            const query = queryString.stringify({ page, limit });
            const response = await axiosAdmin.get(`/category/list?${query}`);
            return response.data; // Return the entire response data from the API
        } catch (error) {
            console.error('Error fetching categories', error);
            throw error;
        }
    },

    getCategoryById: async (id) => {
        const res = await axiosAdmin.get(`/category/${id}`);
        return res.data;
    },

    insertCategory: async (categoryData) => {
        try {
            const formData = new FormData();
            formData.append('categoryParent', categoryData.categoryParent);
            formData.append('lever', categoryData.lever);
            formData.append('name', categoryData.name);

            const response = await axiosAdmin.post('/category/insert', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data; // Return response data after successful insertion
        } catch (error) {
            console.error('Error inserting product', error);
            throw error;
        }
    },

    updateCategory: async (categoryId, updateData) => {
        try {
            const response = await axiosAdmin.put(`/category/update/${categoryId}`, updateData);
            return response.data; // Return response data after successful update
        } catch (error) {
            console.error('Error updating category', error);
            throw error;
        }
    },

    deleteCategory: async (categoryID) => {
        try {
            // This is a placeholder and should be replaced with the correct API call
            // console.log(categoryID);
            const response = await axiosAdmin.delete(`/category/delete/${categoryID}`);
            return response.data; // Return response data after successful deletion
        } catch (error) {
            console.error('Error deleting category', error);
            throw error;
        }
    },
};

export default CategoryApi;
