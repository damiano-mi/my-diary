import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    console.log("Unauthorized");
                    break;
                case 404:
                    console.log("Not Found");
                    break;
                case 500:
                    console.log("Internal Server Error");
                    break;
                default:
                    console.log("Unhandled error:", error.response.status);
            }
            return Promise.reject(error);
        }
    }
);
