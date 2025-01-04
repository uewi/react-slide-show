import React from 'react';
import Slides from './Slides';

function App() {
  return (
    <>
      <Slides
        messages={[
          { id: 1, title: 'Freshman' },
          { id: 2, title: 'Sophomore' },
          { id: 3, title: 'Junior' },
          { id: 4, title: 'Senior' },
        ]}
      />

      <Slides
        messages={[
          { id: 1, title: 'HTML' },
          { id: 2, title: 'CSS' },
          { id: 3, title: 'JavaScript' },
        ]}
      />
    </>
  );
}

export default App;
