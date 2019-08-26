import React, { useEffect, useState } from "react";

import EpisodeCard from './EpisodeCard.js';
import Axios from "axios";


const EpisodeList = () => {

    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {

        Axios.get('https://rickandmortyapi.com/api/episode/')
            .then(apiData => {
                console.log(apiData);
                setEpisodes(apiData.data.results)
            })
            .catch(err => {
                alert(err);
            });
    }, []);

    if(!episodes.length) {
        return (<h2>Loading Episodes</h2>)
    } else {
        return (
            <section className="character-list grid-view"> 
                {episodes.map(episode => {
                    return (<EpisodeCard key={episode.id} name={episode.name} episode={episode.episode} date={episode.air_date} characters={episode.characters} />);
                })}
            </section>
        );
    }
};

export default EpisodeList;