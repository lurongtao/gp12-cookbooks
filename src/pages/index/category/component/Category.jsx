import React, { Component } from 'react'

import Cate from 'components/category/Category'

import http from 'utils/http'
import BScroll from 'better-scroll'

import animate from 'components/hoc/animate'

import { withRouter } from 'react-router-dom'

class Category extends Component {
  state = {
    defaultNav: '热门',
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
      cateList: result.data.category
    })

    new BScroll('.menu_left', {
      click: true
    })
    new BScroll('.menu_right', {
      click: true
    })
  }

  handleClick = (value) => {
    this.setState({
      defaultNav: value
    })
  }
}

export default withRouter(animate(Category))