import React, { useState, useCallback, useLayoutEffect } from 'react'

import Cate from 'components/category/Category'

import http from 'utils/http'
import BScroll from 'better-scroll'

import animate from 'components/hoc/animate'

import { withRouter } from 'react-router-dom'

function Material () {
  let [state, setState] = useState({
    defaultNav: '肉类',
    cateList: {}
  })
  
  const handleClick = useCallback((value) => {
    setState({
      ...state,
      defaultNav: value
    })
  }, [state])

  useLayoutEffect(() => {
    (async () => {
      let result = await http.get({
        url: '/api/category'
      })
  
      setState((state) => ({
        ...state,
        cateList: result.data.material
      }))

      new BScroll('.menu_left', {
        click: true
      })
  
      new BScroll('.menu_right', {
        click: true
      })
    })()
  }, [])

  return <Cate 
    data={state.cateList} 
    defaultNav={state.defaultNav}
    onNavClick={handleClick}
  ></Cate>
}

export default withRouter(animate(Material))