import React from 'react';
import {ButtonToolbar, Button} from 'react-bootstrap'

const SharedButton = ({ amount, onClickShared }) => {
  return (
    <ButtonToolbar>
      <Button onClick={onClickShared}>
        Like {amount}
      </Button>
    </ButtonToolbar>
  );
};

export default SharedButton;
