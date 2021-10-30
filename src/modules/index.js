import React, { Component } from 'react'

export class StopWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
        }
        this.timerId = null;
    }
    tick = () =>{
        const {time} = this.state
        this.setState({time: time + 1})
    }
    reset = () => {
        this.setState({time: 0})
    }
    start = () =>{
      this.timerId = setInterval(this.tick, 1000)
       //this.setState({time: this.timeId})
    }
    stop = () =>{
        clearInterval(this.timerId);
        this.timerId = null;
    }
    componentDidMount(){
        this.start();
    }
    componentWillUnmount(){
        this.stop();
    }
    componentDidUpdate(prevProps, prevState){
        
    }
    render() {
        const {time} = this.state
        return (
        <article>
            <h1>{time}</h1>
            <button onClick={this.start}>Start</button>
            <button onClick={this.stop}>Stop</button>
            <button onClick={this.reset}>Reset</button>
        </article>
        )
    }
}

export default StopWatch
