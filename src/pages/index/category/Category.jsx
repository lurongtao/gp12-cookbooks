import React, { useState, useCallback } from 'react'

import {
  CateContainer,
  SlideContainer,
  CateBodyWrap
} from './StyledCategory'

import {
  Route,
  withRouter,
  Redirect
} from 'react-router-dom'

import Cate from './component/Category'
import Material from './component/Material'

import Search from 'components/search/Search'

function Category (props) {
  let [dir, setDir] = useState('left')
  let path = props.match.path

  const handleClick = useCallback((dir) => {
    setDir(dir)
    props.history.push(dir === 'left' ? path + '/category' : path + '/material', {dir})
  }, [path, props])

  return (
    <CateContainer>
      <header>
        <SlideContainer className={dir}>
          <li onClick={() => handleClick('left')} className={dir === 'left' ? 'active' : ''}>分类</li>
          <li onClick={() => handleClick('right')} className={dir === 'right' ? 'active' : ''}>食材</li>
        </SlideContainer>
      </header>
      <Search outerBg="#fff" innerBg="#f5f5f5" hasBorder={false}></Search>
      <CateBodyWrap>
        <Route path={`${path}/category`} children={(props) => <Cate></Cate>}></Route>
        <Route path={`${path}/material`} children={(props) => <Material></Material>}></Route>
        <Redirect from={`${path}`} exact to={`${path}/category`}></Redirect>
      </CateBodyWrap>
    </CateContainer>
  )
}

export default withRouter(Category)
