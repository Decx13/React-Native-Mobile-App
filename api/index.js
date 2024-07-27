import axios from "axios";

export const getPlacesData = async () => {
    try {
       const {data : {data}} = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
            {
            params: {
                bl_latitude: '11.847676',
                tr_latitude: '12.838442',
                bl_longitude: '109.095887',
                tr_longitude: '109.149359',
                limit: '30',
                currency: 'USD',
                lunit: 'km',
                lang: 'en_US'
              },
              headers: {
                'x-rapidapi-key': 'ea94c50bfcmsh04ab93e961d7e3dp11e91ejsn63e2d9c5365e',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
              },
            }
        );
        return data;
    } catch (error) {
       return null 
    }
}