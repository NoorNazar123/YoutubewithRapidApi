import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"; 

const options = {
  params: {
    maxResults: "50", 
  },
  headers: {
    "x-rapidapi-key": process.env.RAPID_API_KEY,
    "x-rapidapi-host": "youtube-v31.p.rapidapi.com",
  },
};  
 
export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data
};
