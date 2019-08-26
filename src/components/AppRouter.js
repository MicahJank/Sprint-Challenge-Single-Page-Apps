import React from "react";

import { Route } from 'react-router-dom';

import WelcomePage from './WelcomePage.js';
import CharacterList from './CharacterList.js';
import LocationList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';
import SearchForm from './SearchForm.js';

const AppRouter = () => {

    return (
        <>
        <Route exact path='/' component={WelcomePage}/>
        <Route exact path='/characters' component={CharacterList}/>
        <Route exact path='/locations' component={LocationList}/>
        <Route exact path='/episodes' component={EpisodeList}/>
        </>
    );
};

export default AppRouter;