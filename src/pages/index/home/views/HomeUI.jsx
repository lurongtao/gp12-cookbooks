import React from 'react'

import {
  HomeContainer
} from './StyledHome.js'

import Search from 'components/search/Search'
import HotCate from './components/HotCate'
import Swiper from './components/Swiper'
import Top10 from './components/Top10'

export default (props) => {
  return (
    <HomeContainer>
      <header>菜谱大全</header>
      <Swiper list={props.list}></Swiper>
      <Search outerBg="#f5f5f5" innerBg="#fff" hasBorder={true}></Search>
      <HotCate></HotCate>
      <Top10></Top10>
    </HomeContainer>
  )
}