import React, { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  return (
    <div>
      <h1>Kundali</h1>
      <div>{`we are in ${process.env.NODE_ENV} environment`}</div>
    </div>
  );
};

export default App;
