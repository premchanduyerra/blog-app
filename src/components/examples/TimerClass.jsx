import React, { Component } from 'react'

export default class TimerClass extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }

    }

    componentDidMount() {

        this.myInterval = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000);

    }

    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

  render() {
    return (
      <div>
        <h1>Timer: {this.state.count}</h1>
      
      </div>
    )
  }
}
