import axiosAdmin from './axiosAdmin';
import queryString from 'query-string';

const UserApi = {
    login: async (phoneNumber, userPassword) => {
        try {
            const response = await axiosAdmin.post('/user/login', {
                phoneNumber,
                userPassword,
            });
            return response.data;
        } catch (error) {
            console.error("Login error:", error);
            throw error;
        }
    },

    register: async (userData) => {
        try {
            const response = await axiosAdmin.post('/user/register', userData);
            return response.data;
        } catch (error) {
            console.error("Registration error:", error);
            throw error;
        }
    },

    getUsers: async (page, limit = 20) => {
        try {
            page = page - 1;
            const query = queryString.stringify({ page, limit });
            const response = await axiosAdmin.get(`/user/list?${query}`);
            console.log(response.data)
            return response.data; // Return the entire response data from the API
        } catch (error) {
            console.error('Error fetching users', error);
            throw error;
        }
    },

    updateUser: async (userID, updateData) => {
        try {
            const response = await axiosAdmin.put(`/user/update/${userID}`, updateData);
            return response.data; // Return response data after successful update
        } catch (error) {
            console.error('Error updating user', error);
            throw error;
        }
    },

    deleteUser: async (userID) => {
        try {
            // This is a placeholder and should be replaced with the correct API call
            console.log(userID);
            const response = await axiosAdmin.delete(`/user/delete/${userID}`);
            return response.data; // Return response data after successful deletion
        } catch (error) {
            console.error('Error deleting user', error);
            throw error;
        }
    },

};

export default UserApi;
