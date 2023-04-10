// noinspection DuplicatedCode

import React, {useState} from 'react';
import ReactDOM from 'react-dom';

class ErrorBoundary extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() { 
    return this.props.children;
  }
}

let LightSwitch = ({switchNumber = -1}) => {
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