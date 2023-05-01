import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  // This is a lifecycle method that is invoked after an error has been thrown by a 
  // descendant component. 
  // 
  // - Receives the error that was thrown as a parameter and should return the error
  // - boundary's next state. 
  static getDerivedStateFromError(error) {
    // ES6 shorthand, error is the same as { error: error }
    return { error };
  }

  render() { 

    // Render fallback if error occurs
    if (this.state.error) {
      return (
        <div>
          <h2>An error was detected!</h2>
        </div>
      )
    }

    // Otherwise render the children!
    return this.props.children;
  }
}

function LightSwitch({switchNumber = 1}) {
  const [ isOn, setIsOn ] = useState(false);
  const [badSwitchPressed, setBadSwitchPressed] = useState(false);

  if (badSwitchPressed) { 
    throw new Error('Why do we even have this switch?');
  }

  const bgColor = isOn ? 'white' : 'black';
  const textColor = isOn ? 'black' : 'white';

  const handleLightSwitchClick = () => {
    setIsOn( isOn => !isOn);
  }

  const handleBadSwitchClick = () => {
    setBadSwitchPressed(true);
  }

  return (
    <div
      className='lightSwitch'
      style={{background : bgColor, color: textColor}}
    >
      <button onClick={handleLightSwitchClick}>
        {switchNumber} - {isOn ? "On" : "Off"}
      </button>
      <button onClick={handleBadSwitchClick}>
        Bad Switch
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="container">
      <ErrorBoundary>
        <LightSwitch switchNumber={1}/>
        <LightSwitch switchNumber={2}/>
      </ErrorBoundary>
      <ErrorBoundary>
        <LightSwitch switchNumber={3}/>
      </ErrorBoundary>
      
      <LightSwitch switchNumber={4}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);