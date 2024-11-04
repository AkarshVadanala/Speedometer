import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  accelerateSpeed = () => {
    const {count} = this.state
    if (count < 200) {
      this.setState(prevCount => ({count: prevCount.count + 10}))
    } else if (count === 200) {
      this.setState({count: 200})
    }
  }

  applyBrake = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevCount => ({count: prevCount.count - 10}))
    } else if (count === 0) {
      this.setState({count: 0})
    }
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="speedometer"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="button"
            className="accelerate-button"
            onClick={this.accelerateSpeed}
          >
            Accelerate
          </button>
          <button
            type="button"
            className="break-button"
            onClick={this.applyBrake}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
