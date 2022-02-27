const API_KEY = "1540156f3d7f089c4a92e9fdcaf01970";


const URL = (tag) => {
  return `https://api.themoviedb.org/3/movie/${tag}?api_key=${API_KEY}&page1`;
};

const getMovies = async (URL) => {
  const response = await fetch(URL);
  const data = await response.json();
  return data;
};

const searchURL = BASE_URL + '/search/movie?'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';

