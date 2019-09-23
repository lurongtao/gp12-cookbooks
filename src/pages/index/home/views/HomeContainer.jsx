import React, { Component } from 'react'

import HomeUI from './HomeUI'
import connect from './connect'

@connect
class Home extends Component {
  render() {
    return (
      <HomeUI
        list = {this.props.list}
      ></HomeUI>
    )
  }

  componentDidMount() {
    this.props.loadData()
  }
}

export default Home
