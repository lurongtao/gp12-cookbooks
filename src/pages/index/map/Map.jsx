import React, { Component } from 'react'

import { MapContainer } from './StyledMap'

export default class Map extends Component {
  render() {
    return (
      <MapContainer>
        <iframe title="map" src="/map.html"></iframe>
      </MapContainer>
    )
  }

  componentDidMount() {
    // console.log(this)
  }
  
  componentDidUpdate() {
  }
}
