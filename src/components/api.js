import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';

const API_KEY = '33379348-ee229b2ba87d6e51820269182';

export const getImages = async (searchQuery) => {
    const response = await axios.get(`${BASE_URL}?q=${searchQuery}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`);
    return response.data;
}



