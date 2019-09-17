import React, { Component } from 'react'

export default class Map extends Component {
  render() {
    return (
      <div>
        map
      </div>
    )
  }

  componentDidMount() {
    console.log(0)
  }
  
  componentDidUpdate() {
    console.log(1)
  }
}
