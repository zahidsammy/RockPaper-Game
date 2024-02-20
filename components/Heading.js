import { Appbar } from 'react-native-paper';
import React from 'react';

const Heading = () => {
  return (
    <Appbar.Header style={{ backgroundColor: '#aceb90' }}>
      <Appbar.Content title="Rock Paper Scissors" style={{ alignItems: 'center', transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }} />
    </Appbar.Header>
  );
};

export default Heading;

