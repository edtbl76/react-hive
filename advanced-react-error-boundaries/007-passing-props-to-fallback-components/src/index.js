// noinspection DuplicatedCode

import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import LogError from './error-logging-service';
import { ErrorBoundary } from 'react-error-boundary'
import './index.css';



let LightSwitch = ({switchNumber = 1})  => {
  const [isOn, setIsOn] = useState(false);
  const [badSwitchPressed, setBadSwitchPressed] = useState(false);

  if (badSwitchPressed) {
    throw new Error('Why do we even have this switch?');
  }

  const bgColor = isOn ? 'white' : 'black';
  const textColor = isOn ? 'black' : 'white';  
 
  const handleLightSwitchClick = () => {
    setIsOn(isOn => !isOn);
  }
  const handleBadSwitchClick = () => {
    setBadSwitchPressed(true);
  }
 
  return (  
    <div 
      className="lightSwitch"
      style={{background : bgColor, color: textColor}}
    >
      <button onClick={handleLightSwitchClick}>
        {switchNumber} — {isOn ? "On" : "Off"}
      </button>
      <button onClick={handleBadSwitchClick}>
        Bad Switch
      </button>
    </div>
  )
}

let ErrorFallback = ({error, resetErrorBoundary},switchNumber) => {
  return (
    <div>
      <h2>An error was found in switch {switchNumber}</h2>
      <p>Error: {error.message}</p>
      <button onClick={resetErrorBoundary}>Reset switch {switchNumber}</button>
    </div>
  );
}


function App() {
  return (
    <div className="container">
      {[1, 2, 3, 4].map((num) => {

        return (
          <ErrorBoundary
              // This line to define a key param is to quiet an issue w/ SonarLint. (I'd prefer to suppress it
              // ,but they don't have a way to do that for JS)
              key={num}
              onError={LogError}
              FallbackComponent={props => ErrorFallback({...props}, num)}>
              <LightSwitch switchNumber={num} />
          </ErrorBoundary>
        );
      })}
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);