import ReactDOM from 'react-dom';
import React, { useState } from 'react';
// NOSONAR
import { ErrorBoundary } from 'react-error-boundary'
import './index.css';

function ErrorFallback() {
  return (
    <div>
      <h2>An error was detected!!</h2>
    </div>
  );
}

// noinspection DuplicatedCode
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

function App() {
  return (
    <div className="container">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LightSwitch switchNumber={1}/>
        <LightSwitch switchNumber={2}/>
      </ErrorBoundary>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <LightSwitch switchNumber={3}/>
      </ErrorBoundary>
      <LightSwitch switchNumber={4}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);