import React from "react";
import { Card, CardText } from "reactstrap";
const User = props => {
  const { name } = props.user;
  return (
    <div>
      <Card>
        <CardText>{name}</CardText>
      </Card>
    </div>
  );
};

export default User;
