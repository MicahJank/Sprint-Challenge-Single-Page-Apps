import React, { useEffect, useState } from "react";


import SearchForm from './SearchForm.js';
import CharacterCard from './CharacterCard.js';
import Axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
      .then(apiObject => {
        // console.log(apiObject.data.results);
        setCharacters(apiObject.data.results);
      })
      .catch(err => {
        alert(err);
      });

  }, []);

  if(!characters.length) {
    return (<h2>Loading Characters...</h2>)
  } else {
    return (
      <>
      <SearchForm setCharacters={setCharacters}/>
      <section className="character-list grid-view">
        {characters.map(character => {
          return (<CharacterCard key={character.id} image={character.image} name={character.name} species={character.species} status={character.status} location={character.location.name} origin={character.origin.name} episodes={character.episode}/>)
        })}
      </section>
      </>
    );
  }
}

