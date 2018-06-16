import React from 'react';
import { render } from 'react-dom';

const App = () => (
  <div>
    <p>react here</p>
  </div>
);

export default App;

render(
  <App />,
  document.getElementById('app')
);