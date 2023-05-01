import ReactDOM from 'react-dom';
import React, { useState } from 'react';
import { logError } from './error-logging-service';
import { ErrorBoundary } from 'react-error-boundary'
import './index.css';



function LightSwitch({switchNumber = 1}) {
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

function ErrorFallback({error, resetErrorBoundary, switchNumber}) {
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
            onError={logError} 
            FallbackComponent={(props) => {
              return <ErrorFallback {...props} switchNumber={num} />
            }}>
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