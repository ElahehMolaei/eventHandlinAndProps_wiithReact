import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

var interval
class Timer extends React.Component {
    constructor() {
        super();
        let min = 1;
        let max = 100;
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        this.state = {
            time: randomNumber
        };
    }
    componentDidMount() {
        this.startInterval();
    }
    startInterval = () => {
        interval = setInterval(() => {
            this.setState(
                { time: this.state.time - 1 }
            )
        }, 1000);
    }
    stopInterval = () => {
     clearInterval(interval)
    }
    componentDidUpdate() {
        if (this.state.time === 0) {
            this.stopInterval();
            alert('finish!')
        }
    }

    render() {
        return (
            <div>
                <div className='timer'>
                    it is {this.state.time}
                </div>
                {/* <button></button> */}
                <div className='button_box'>
                    <button className='action_button start_button' onClick={this.startInterval}>start</button>
                    <button className='action_button stop_button' onClick={this.stopInterval}>stop</button>
                    <button className='action_button reset_button'>reset</button>
                </div>
            </div>
        )
    }
}

export default Timer