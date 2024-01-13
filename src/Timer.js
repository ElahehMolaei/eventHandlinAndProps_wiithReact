import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'

var interval
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            hour: 0,
            minute: 0,
            second: 0,
            isStart: false
        };
    }
    // componentDidMount() {
    //     this.startInterval();
    // }
    startInterval = () => {
        if (this.state.isStart == false) {
            this.setState(
                { isStart: true }
            )
            interval = setInterval(() => {
                this.setState(
                    { second: this.state.second + 1 }
                )
                if (this.state.second === 60) {
                    this.setState(
                        {
                            second: 0,
                            minute: this.state.minute + 1
                        }
                    )
                }
                if (this.state.minute === 60) {
                    this.setState(
                        {
                            minute: 0,
                            hour: this.state.hour + 1
                        }
                    )
                }
            }, 1000);
        }
    }
    stopInterval = () => {
        clearInterval(interval)
        this.setState(
            { isStart: false }
        )
    }
    // componentDidUpdate() {
    //     if (this.state.time === 0) {
    //         this.stopInterval();
    //         alert('finish!')
    //     }
    // }
    resetInterval = () => {
        this.stopInterval();
        this.setState(
            {
                hour: 0,
                minute: 0,
                second: 0,
            }
        )
    }
    render() {
        let h = this.state.hour
        let m = this.state.minute
        let s = this.state.second
        return (
            <div>
                <div className='timer'>
                    {/* it is {this.state.hour + ":" + this.state.minute + ":" + this.state.second} */}
                    {`${h > 9 ? h : "0" + h} : ${m > 9 ? m : "0" + m} : ${s > 9 ? s : "0" + s}`}
                </div>
                {/* <button></button> */}
                <div className='button_box'>
                    <button className='action_button start_button' onClick={this.startInterval}>start</button>
                    <button className='action_button stop_button' onClick={this.stopInterval}>stop</button>
                    <button className='action_button reset_button' onClick={this.resetInterval}>reset</button>
                </div>
            </div>
        )
    }
}

export default Timer