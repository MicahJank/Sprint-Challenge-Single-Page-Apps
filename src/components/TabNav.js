import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

import styled from 'styled-components';

import WelcomePage from './WelcomePage.js';
import CharacterList from './CharacterList.js';
import LocationList from './LocationsList.js';
import EpisodeList from './EpisodeList.js';

import AppRouter from './AppRouter.js';



// TODO: Add missing tabs below

const MyMenu = styled.div`
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    
    a {
        margin: 20px;
        font-size: 1.5rem;
    }
`;

export default function TabNav() {

    return (
    <>
       <MyMenu>
           <NavLink to={'/'}>Home</NavLink>
           <NavLink  to={'/characters'}>Characters</NavLink>
           <NavLink  to={'/locations'}>Locations</NavLink>
           <NavLink  to={'/episodes'}>Episodes</NavLink>
       </MyMenu>

    </>
    );
};
