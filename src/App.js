import React from 'react';
import ReactDOM from 'react-dom/client';

import Hello from './Hello';
import Timer from './Timer'
import './style.css'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            s: "شروع"
        }
    }
    clkOnStart = () => {
        this.setState({
            s: "توقف"
        })
    }
    clkOnStop = () => {
        this.setState({
            s: "ادامه"
     })
     }
    clkOnResume = () => {
            this.setState({
                s: "توقف"
            })
    }
        render() {
            return (
                <div className='main'>
                    <Hello />
                    <Timer
                        s={this.state.s}
                        clkOnStart={this.clkOnStart}
                        clkOnStop={this.clkOnStop}
                        clkOnResume={this.clkOnResume}
                    />
                </div>
            )
        }

    }

export default App