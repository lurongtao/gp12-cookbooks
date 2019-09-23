import React, { Component } from 'react'

import {
  HotCateContainer
} from '../StyledHome'

import Grid from 'components/grid/Grid'

import http from 'utils/http.js'
export default class HotCate extends Component {
  state = {
    hotCateList: []
  }

  render() {
    return (
      <HotCateContainer>
        <div>热门分类</div>
        <Grid gridList={this.state.hotCateList} columns={4}></Grid>
      </HotCateContainer>
    )
  }

  async componentDidMount() {
    let result = await http.get({url: '/api/hotcate'})
    this.setState({
      hotCateList: result.data
    })
  }
}
