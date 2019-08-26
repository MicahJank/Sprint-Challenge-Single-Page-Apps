import React, { useEffect, useState } from "react";

import LocationCard from './LocationCard';
import Axios from "axios";

export default function LocationsList() {
    
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        Axios.get('https://rickandmortyapi.com/api/location/')
            .then(apiData => {
                // console.log(apiData.data.results);
                setLocations(apiData.data.results);
            })
            .catch(err => {
                alert(err);
            });
    }, []);

    if(!locations.length) {
        return (<h2>Loading Locations...</h2>)
    } else {
        return (
            <section className="character-list grid-view">
                {locations.map(location => {
                    return (<LocationCard key={location.id} name={location.name} type={location.type} dimension={location.dimension} residents={location.residents} />);
                })}
            </section>
           
        )
    }

    
}
