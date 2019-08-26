import React from "react";

import { Card, Icon, Image } from 'semantic-ui-react';


const EpisodeCard = ( { name, episode, date, characters } ) => {

    const description = (
        <span>{episode} - {date}</span>
      );
    
      return (
        <Card>
          <Card.Content header={name} />
          <Card.Content description={description} />
          <Card.Content extra>
            <Icon name='user' />
            {characters.length} Characters
          </Card.Content>
        </Card>
      )

};

export default EpisodeCard;