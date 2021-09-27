import axios from 'axios';

let API_KEY = 'http://newsapi.org/v2';
const axiosClient = axios.create({
  baseURL: 'https://app.pokemon-api.xyz/pokemon',
  headers :  { 'Content-Type': 'application/json' }
});

const getNews = async category =>   
  await axiosClient.get( `/top-headlines?country=co&category=${ category }&apiKey=${API_KEY}` );

export default getNews;