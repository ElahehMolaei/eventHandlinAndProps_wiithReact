import React from 'react';
import ReactDOM from 'react-dom/client';

import Hello from './Hello';
import Timer from './Timer'
import './style.css'

class App extends React.Component {
    // constructor() {
    //    super();
    // }
   
        render() {
            return (
                <div className='main'>
                    <Hello />
                    <Timer />
                </div>
            )
        }

    }

export default App