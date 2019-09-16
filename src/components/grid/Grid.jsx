import React, { Component } from 'react'
import { GridContainer } from './StyledGrid'

export default class Grid extends Component {
  render() {
    return (
      <GridContainer columns={this.props.columns}>
        <ul>
          {
            this.props.gridList.map((value, index) => (
              <li key={value.title}>
                <img src={value.img} alt=""/>
                <b>{value.title}</b>
              </li>
            ))
          }
          <li>更多...</li>
        </ul>
      </GridContainer>
    )
  }
}
