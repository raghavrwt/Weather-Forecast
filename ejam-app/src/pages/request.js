import axios from 'axios'; 

export const fetchWeatherReport = (city) => {
    const url = "http://localhost:4000/";

    return axios.post(url, city).then(response => {
        if (response.status !== 200) {
            return {
                isSuccess: false
            }
        }

        return response.data;
    });
}