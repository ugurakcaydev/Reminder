// api.js dosyası
import axios from 'axios';

export const sendDataToApi = async (meeting) => {
    try {
        const response = await axios.post('API_URL', meeting);
        return response.data;
    } catch (error) {
        console.error(error);
    }
};
