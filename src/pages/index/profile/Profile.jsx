import React, { Component } from 'react'

import { Switch } from 'antd-mobile'

import { MapConsumer } from '../../../context/MapContext'

export default class Profile extends Component {
  render() {
    return (
      <MapConsumer>
        {
          (value) => {
            return (
              <div style={{padding: '.15rem'}}>
                是否显示Map: 
                <Switch
                  checked={value.isShowMap}
                  onChange={() => {
                    value.changeStatus(!value.isShowMap)
                  }}
                />
              </div>
            )
          }
        }
      </MapConsumer>
      
    )
  }
}
