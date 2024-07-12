import axiosAdmin from './axiosAdmin';

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
};

export default UserApi;
