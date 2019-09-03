
import axios from 'axios';

  export default
  {	
    GetFilms : () => axios.get('https://swapi.co/api/films'),
    GetFilm : (id) => axios.get('https://swapi.co/api/films/'+id),
    GetCharacters : (uri) => axios.get(uri),
    GetFilmByUri : (uri) => axios.get(uri),
  }