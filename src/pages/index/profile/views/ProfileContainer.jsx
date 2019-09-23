import React, { Component } from 'react'

import connect from './connect'

import ProfileUI from './ProfileUI'

@connect
class Profile extends Component {
  render() {
    return (
      <ProfileUI
        checked = {this.props.isShowMap}
        change = {this.props.changeValue}
      ></ProfileUI>
    )
  }
}

export default Profile
