import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (ne, sw) => {
    try {
        const { data: { data } } = await axios.get(URL, {
            method: 'GET',

            // bl as bottom left (south-west). tr as top right (north-east).
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },

            headers: {
                'X-RapidAPI-Key': 'b954aff01fmshf9b166a7dc3c8d8p1f969djsncc1848402dea',
                'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
        }
    );

        return data;
    } catch (error) {
        console.log(error);
    }
}