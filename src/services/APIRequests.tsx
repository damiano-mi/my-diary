import axios from "axios";

export default function requests(method: string, url: string, data: any) {

    return axios.request({
        method,
        url,
        data
    })
        .catch((error: any) => {
            if (error.response) { throw error.response.data; }
            else if (error.request) { throw error.request } else { throw new Error(`Error: ${error.message}`) }
        });
}