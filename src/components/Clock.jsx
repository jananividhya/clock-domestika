import React, { Component } from "react";
// import Draggable from "react-draggable";

export default class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      timeInput: new Date().getMinutes() + ":" + new Date().getSeconds(),
    };
  }

  getCurrTime = () => {
    const [minutes, seconds] = this.state.timeInput.split(":");
    const currentDate = new Date();
    if (parseInt(seconds) === 60) {
      currentDate.setMinutes(parseInt(minutes) + 1);
    } else currentDate.setMinutes(minutes);

    currentDate.setSeconds(parseInt(seconds) + 1);

    return currentDate;
  };

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prev) => {
        const currentDate = this.getCurrTime();
        return {
          time: new Date(currentDate),
          timeInput: currentDate.getMinutes() + ":" + currentDate.getSeconds(),
        };
      });
    }, 1000);

    // For checking
    // setTimeout(() => {
    //   this.setState({
    //     timeInput: "50:50",
    //   });
    // }, 3000);
  }

  handleChange = (e) => {
    this.setState({
      timeInput: e.target.value,
    });
  };

  componentWillMount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <>
        <div className="clock">
          {/* <Draggable
            axis="x"
            handle=".handle"
            defaultPosition={{ x: 0, y: 0 }}
            position={null}
            positionOffset={{ x: 100, y: 100 }}
            grid={[25, 25]}
            scale={1}
            onStart={this.handleStart}
            onDrag={this.handleDrag}
            onStop={this.handleStop}
          > */}
          <div
            className="min_hand"
            style={{
              transform: `rotateZ(${this.state.time.getMinutes() * 6}deg)`,
            }}
          />
          {/* </Draggable> */}
          <div
            className="sec_hand"
            style={{
              transform: `rotateZ(${this.state.time.getSeconds() * 6}deg)`,
            }}
          />
          <span className="twelve">12</span>
          <span className="one">1</span>
          <span className="two">2</span>
          <span className="three">3</span>
          <span className="four">4</span>
          <span className="five">5</span>
          <span className="six">6</span>
          <span className="seven">7</span>
          <span className="eight">8</span>
          <span className="nine">9</span>
          <span className="ten">10</span>
          <span className="eleven">11</span>
        </div>
        <div className="clockInputClass">
          <input
            type="text"
            value={this.state.timeInput}
            onChange={this.handleChange}
          />
        </div>
      </>
    );
  }
}
