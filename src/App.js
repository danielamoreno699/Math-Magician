import React from 'react';
import ButtonBox from './components/buttonbox';
import Screen from './components/screen';
import Calculator from './components/calculator';

function App() {
  return (
    <div className="App">
      <div className="App">
        <Calculator>
          <Screen />
          <ButtonBox />
        </Calculator>
      </div>
    </div>
  );
}

export default App;
