import React from "react";

import { Card, Icon, Image } from 'semantic-ui-react';
import { stat } from "fs";


export default function CharacterCard( { image, name, species, status, location, origin, episodes } ) {
  return (
    <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className='date'>{species} {status}</span>
      </Card.Meta>
      <Card.Description>
        Location: {location}
        <br />
        Origin: {origin}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Episodes
      </a>
    </Card.Content>
  </Card>
  );
}
