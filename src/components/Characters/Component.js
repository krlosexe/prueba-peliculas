import React,{ useState , useEffect } from 'react';
import API from '../../API/Films';
import Gui from './Gui'

function Characters(props) {

    const [ loading, set_Loading ] = useState(false);
    const [ characters_ready, set_characters_ready ] = useState(false);
    const [Characters,SetCharacter] = useState([])

    // Step 1 ) Load film data

    function GetCharacters()
    {
        set_Loading(true)

        // Obteniendo los datos basicos del film
        API.GetFilm(props.props.props.match.params.id).then(res =>{
            loadCharacters(res.data.characters)
        }).catch(error => {
            set_Loading(false)
        });
    }

    // Step 2 ) Load film data
    function loadCharacters(data){

        const temp_characters = []
        const total_characters = data.length
        data.map((uri,index)=>{

            //Obteniendo datos del personaje
            API.GetCharacters(uri).then(response =>{
                
                temp_characters.push({
                    name : response.data.name,
                    eye_color : response.data.eye_color,
                    gender : response.data.gender,
                    films : response.data.films,
                    films_names : [],
                })

                SetCharacter(
                    ...Characters,
                    temp_characters
                )

                if ( index === (total_characters - 1)){
                    set_characters_ready(true)
                }
            })
            .catch(error => {
                set_Loading(false)
            });

            return false
        })
    }


    function assingFilmCharacterName(){


        const staticCharacters = Characters

        // Recorriendo la lista de caracteres
            Characters.map((CharacterItem,CharacterIndex)=>{

            // Recorriendo los enlaces simbolicos del film
                Characters[CharacterIndex].films.map((uri,index)=>{


                    API.GetFilmByUri(uri).then(res =>{
                        // Recorriendo los enlaces simbolicos de cada personaje del film
                        staticCharacters[CharacterIndex].films_names.push(res.data.title)

                        SetCharacter([
                            ...staticCharacters
                        ])


                    }).catch(error => {
                        set_Loading(false)
                    });
                    return  false
            })

            return false

        })


    }
	
	useEffect(() => {
		GetCharacters();
    },[]);

    useEffect(() => {
		assingFilmCharacterName();
    },[characters_ready]);
    
    
    // if(loading){
    //     return (<p>Cargando...</p>)
    // }

  return (
    <div>
        <Gui 
            loading={loading}
            Characters={Characters}
        />
    </div>

  );
}

export default Characters;