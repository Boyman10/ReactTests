import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


function CoolComponent() {
    return React.createElement('p', {}, 'Youpi So Cool !')
}

function CoolComponent() {
    return <p>Youpi So Cool !</p>
}

ReactDOM.render(
    <CoolComponent />,
    document.getElementById('root')
)


//ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(
    React.createElement(CoolComponent),
    document.getElementById('root')
)
registerServiceWorker();