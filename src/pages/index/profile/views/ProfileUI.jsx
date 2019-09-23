import React from 'react'
import { Switch } from 'antd-mobile'
export default (props) => {
  return (
    <div style={{padding: '.15rem'}}>
      是否显示Map: 
      <Switch
        checked={props.checked}
        onChange={() => {
          props.change()
        }}
      />
    </div>
  )
}