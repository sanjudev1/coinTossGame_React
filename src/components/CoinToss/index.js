// Write your code here

import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {head: 0, tail: 0, image: 0}

  eventToss = () => {
    const result = Math.floor(Math.random() * 2)
    if (result === 0) {
      this.setState(prevState => ({head: prevState.head + 1}))
      this.setState({image: 0})
    } else {
      this.setState(prevState => ({tail: prevState.tail + 1}))
      this.setState({image: 1})
    }
  }

  render() {
    const {head, tail, image} = this.state

    return (
      <>
        <div className="container">
          <div className="card">
            <h1>Coin Toss Game</h1>
            <p>Heads (or) Tails</p>
            {image === 0 && (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
                  alt="toss result"
                  className="head"
                />
              </div>
            )}
            {image === 1 && (
              <div>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
                  alt="toss result"
                  className="tail"
                />
              </div>
            )}
            <button className="button" type="button" onClick={this.eventToss}>
              Toss Coin
            </button>
            <div className="result">
              <p>Total:{head + tail}</p>
              <p>Heads:{head}</p>
              <p>Tails:{tail}</p>
            </div>
          </div>
        </div>
      </>
    )
  }
}
export default CoinToss
