import React, { Component } from 'react'

import {
  HomeContainer
} from './StyledHome.js'

import Search from 'components/search/Search'
import HotCate from './HotCate'
import Swiper from './Swiper'
import Top10 from './Top10'

export default class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <header>菜谱大全</header>
        <Swiper></Swiper>
        <Search outerBg="#f5f5f5" innerBg="#fff" hasBorder={true}></Search>
        <HotCate></HotCate>
        <Top10></Top10>
      </HomeContainer>
    )
  }
}
