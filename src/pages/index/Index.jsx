import React, { PureComponent } from 'react'

import { TabBar } from 'antd-mobile'

import cookbook from 'images/cookbook.png'
import cookbookActive from 'images/cookbook-active.png'
import menu from 'images/menu.png'
import menuActive from 'images/menu-active.png'
import location from 'images/location.png'
import locationActive from 'images/location-active.png'
import more from 'images/more.png'
import moreActive from 'images/more-active.png'

import Home from './home/Home'
import Category from './category/Category'
import Map from './map/Map'
import Profile from './profile/Profile'

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
    title: '美食地图',
    key: 'map',
    icons: {
      icon: location,
      selectedIcon: locationActive
    },
    component: Map
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

export default class Index extends PureComponent {
  constructor() {
    super()
    this.state = {
      selectedTab: 'cookbook',
      hidden: false,
      fullScreen: true,
    }
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          {
            tabList.map((value, index) => {
              return <TabBar.Item
                title={value.title}
                key={value.key}
                icon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${value.icons.icon}) center center /  21px 21px no-repeat` }}
                />
                }
                selectedIcon={<div style={{
                  width: '22px',
                  height: '22px',
                  background: `url(${value.icons.selectedIcon}) center center /  21px 21px no-repeat` }}
                />
                }
                selected={this.state.selectedTab === value.key}
                onPress={() => {
                  this.setState({
                    selectedTab: value.key,
                  });
                }}
                data-seed="logId"
              >
                {<value.component></value.component>}
              </TabBar.Item>
            })
          }
        </TabBar>
      </div>
    )
  }
}
