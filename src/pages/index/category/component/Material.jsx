import React, { Component } from 'react'

import Cate from 'components/category/Category'

import http from 'utils/http'
import BScroll from 'better-scroll'

export default class Material extends Component {
  state = {
    defaultNav: '肉类',
    cateList: {}
  }

  render() {
    return <Cate 
      data={this.state.cateList} 
      defaultNav={this.state.defaultNav}
      onNavClick={this.handleClick}
    ></Cate>
  }

  async componentDidMount() {
    let result = await http.get({
      url: '/api/category'
    })

    this.setState({
      cateList: result.data.material
    })

    new BScroll('#menu_left', {
      click: true
    })
    new BScroll('#menu_right', {
      click: true
    })
  }

  handleClick = (value) => {
    this.setState({
      defaultNav: value
    })
  }
}