import React, { Component } from 'react'

import ListUI from './ListUI'
import connect from './connect'

@connect
class ListContainer extends Component {
  render() {
    return (
      <ListUI
        list={this.props.list}
        onBack={this.handleBack}
      ></ListUI>
    )
  }

  componentDidMount() {
    if (this.props.list.length === 0) {
      this.props.loadData()
    }
  }

  handleBack = () => {
    this.props.history.go(-1)
  }
}

export default ListContainer
