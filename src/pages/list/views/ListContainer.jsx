import React, { PureComponent } from 'react'

import ListUI from './ListUI'
import connect from './connect'
import { ListView } from 'antd-mobile'

@connect
class ListContainer extends PureComponent {
  constructor(props) {
    super(props)

    this.page = 0

    this.dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })

    this.state = {
      isLoading: true,
      refreshing: false,
      height: document.documentElement.clientHeight * 3 / 4,
    }
  }

  render() {
    return (
      <ListUI
        list={this.dataSource.cloneWithRows(this.props.list)}
        onBack={this.handleBack}
        onEndReached={this.handleEndReached}
        onRefresh={this.handleRefresh}
        refreshing={this.state.refreshing}
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

  handleEndReached = () => {
    if (this.page < 12) {
      this.props.loadMoreData({
        start: ++this.page * 10,
        limit: 10
      })
    }
  }

  handleRefresh = () => {
    this.setState({
      refreshing: true
    })
    this.props.loadData()
  }

  componentDidUpdate() {
    this.setState({
      refreshing: false
    })
  }
}

export default ListContainer
