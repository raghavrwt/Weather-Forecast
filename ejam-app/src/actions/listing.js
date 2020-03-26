import types from './types'; 
import {fetchWeatherReport} from '../pages/request';
import {format} from 'date-fns';

export const updateSelected = (city) => {
    return async (dispatch) => {
        const promises = city.map(async c => {
            const serverData = {city: c}
            const res = await fetchWeatherReport(serverData);
            return res;
        })

        const response = await Promise.all(promises)

        let newForecast = [];
        response.map(cityData => {
            let modifiedForecast = [];
            cityData.forecasts.map(ele => {
                modifiedForecast.push({
                    ...ele,
                    date: format(new Date(ele.date*1000), 'eee dd MMMM'),
                    high: Math.round((5/9) * (ele.high - 32)),
                    low: Math.round((5/9) * (ele.low - 32))          
                }) 
            })  
            modifiedForecast.splice(5,5)
            newForecast.push({
                ...cityData,
                forecasts: modifiedForecast
            })      
        })

        dispatch({
            type: types.UPDATE_FORECAST,
            payload: {
                data: newForecast
            }
        })
    }
}