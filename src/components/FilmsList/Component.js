import React,{ useState , useEffect } from 'react';
import API from '../../API/Films';
import Gui from './Gui'

function FilmsList(props) {

    const [ loading, set_Loading ] = useState(false);
	const [ DataFilms, SetDataFilms ] = useState([]);

    function GetFilms()
    {
        set_Loading(true)

        API.GetFilms().then(response =>{
            set_Loading(false)
            SetDataFilms(response.data.results)
        })
        .catch(error => {
            set_Loading(false)
        });
	}
	
	useEffect(() => {
		GetFilms();
	},[]);
    

    if(loading){
        return (<p>Cargando...</p>)
    }

  return (
    <div>
        <Gui 
            loading={loading}
            DataFilms={DataFilms}
        />
    </div>

  );
}

export default FilmsList;