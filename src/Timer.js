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
        
    }
    componentDidUpdate() {
        if (this.state.time === 0) {
            clearInterval(interval)
            alert('finish')
        }
    }
    onbtnclk=()=>{
        let but = document.getElementById('btn')
        if(but.textContent==="شروع" || but.textContent==="ادامه"){
            this.props.clkOnStart()
            interval = setInterval(() => {
                this.setState(
                    { time: this.state.time-1 }
                )
            }, 1000);
        }
        else if(but.textContent==="توقف"){
            this.props.clkOnStop()
        }
    }
    render() {
        return (
            <div>
                <div className='timer'>
                    it is {this.state.time}
                </div>
                <button id='btn' onClick={this.onbtnclk}>{this.props.s}</button>
            </div>
        )
    }
}

export default Timer