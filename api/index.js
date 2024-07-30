import axios from "axios";

export const getPlacesData = async (bl_lat, bl_lng, tr_lat, tr_lng, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: bl_lat ? bl_lat : "6.088133184077968",
          tr_latitude: tr_lat ? tr_lat : "6.023649939012475",
          bl_longitude: bl_lng ? bl_lng : " 80.25186537933452",
          tr_longitude: tr_lng ? tr_lng : "80.17212872953226",
          limit: "50",
          currency: "USD",
          subcategory: "hotel,bb,speciality"
         
        },
        headers: {
          'x-rapidapi-key': 'ea94c50bfcmsh04ab93e961d7e3dp11e91ejsn63e2d9c5365e',
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        }
      }
    );

    return data;
    
  } catch (error) {
    return null;
  }
};