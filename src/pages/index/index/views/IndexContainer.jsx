import React, { PureComponent } from 'react'

import cookbook from 'images/cookbook.png'
import cookbookActive from 'images/cookbook-active.png'
import menu from 'images/menu.png'
import menuActive from 'images/menu-active.png'
import location from 'images/location.png'
import locationActive from 'images/location-active.png'
import more from 'images/more.png'
import moreActive from 'images/more-active.png'

import { Home } from '../../home/'
import Category from '../../category/Category'
import Map from '../../map/Map'
// import Demo from '../../demo/Demo'
import { Profile } from '../../profile/'

import IndexUI from './IndexUI'
import connect from './connect'

import { withRouter } from 'react-router-dom'

const mapData = {
  title: '美食地图',
  key: 'map',
  icons: {
    icon: location,
    selectedIcon: locationActive
  },
  component: Map
}

const tabList = [
  {
    title: '菜谱大全',
    key: 'cookbook',
    icons: {
      icon: cookbook,
      selectedIcon: cookbookActive
    },
    component: Home
  },
  {
    title: '分类',
    key: 'category',
    icons: {
      icon: menu,
      selectedIcon: menuActive
    },
    component: Category
  },
  {
    title: '更多',
    key: 'profile',
    icons: {
      icon: more,
      selectedIcon: moreActive
    },
    component: Profile
  }
]

@connect
class Index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: 'cookbooks',
      hidden: false,
      fullScreen: true,
    }

    let { location, history } = this.props
    if (location.pathname !== '/index') {
      history.push(location.pathname)
    }
  }

  render() {
    let { isShowMap } = this.props
    if (isShowMap && tabList.length <= 3) {
      tabList.splice(2, 0, mapData)
    } else if (!isShowMap && tabList.length > 3) {
      tabList.splice(2, 1)
    }
    return (
      <IndexUI
        selectedTab = {this.state.selectedTab}
        hidden = {this.state.hidden}
        fullScreen = {this.state.fullScreen}
        tabList = {tabList}
        changeSelectedTab = {this.changeSelectedTab}
      ></IndexUI>
    )
  }

  changeSelectedTab = (selectedTab) => {
    this.setState({
      selectedTab
    })
    if (selectedTab === 'category') {
      this.props.history.push('/index/category')
    } else {
      this.props.history.push('/index')
    }
  }
}

export default withRouter(Index)