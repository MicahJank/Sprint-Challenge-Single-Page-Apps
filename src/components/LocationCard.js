import React from "react";
import { Card, Icon } from 'semantic-ui-react';




export default function LocationCard({ name, type, dimension, residents }) {

  const description = (
    <span>{type} - {dimension}</span>
  );

  return (
    <Card>
      <Card.Content header={name} />
      <Card.Content description={description} />
      <Card.Content extra>
        <Icon name='user' />
        {residents.length} Residents
      </Card.Content>
    </Card>

  );
}
