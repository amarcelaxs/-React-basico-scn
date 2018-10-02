import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import HelloWorld from './HelloWorld';
import PropsValidation from './PropsValidation'
import Events from './Events'
import Translate from './Translate'
ReactDOM.render(
   // <HelloWorld txt = 'TESTE'/>,
   //<PropsValidation  name="Ana" age="29" height="1.54" />,
   //<Events/>,
   <Translate />,
   document.getElementById('root')
);
    

    //registerServiceWorker();
