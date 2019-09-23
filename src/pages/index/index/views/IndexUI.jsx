import React from 'react'

import { TabBar } from 'antd-mobile'

export default (props) => {
  return (
    <div style={props.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
    <TabBar
      unselectedTintColor="#949494"
      tintColor="#000"
      barTintColor="white"
      hidden={props.hidden}
      prerenderingSiblingsNumber={0}
    >
      {
        props.tabList.map((value, index) => {
          return (
            <TabBar.Item
              title={value.title}
              key={value.key}
              icon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${value.icons.icon}) center center /  21px 21px no-repeat`
              }}
              />
              }
              selectedIcon={<div style={{
                width: '22px',
                height: '22px',
                background: `url(${value.icons.selectedIcon}) center center /  21px 21px no-repeat`
              }}
              />
              }
              selected={props.selectedTab === value.key}
              onPress={() => {
                props.changeSelectedTab(value.key)
              }}
              data-seed="logId"
            >
              {<value.component></value.component>}
            </TabBar.Item>
          )
        })
      }
    </TabBar>
  </div>
  )
}