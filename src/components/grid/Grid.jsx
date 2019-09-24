import React, { Component } from 'react'
import { GridContainer } from './StyledGrid'

import { withRouter } from 'react-router-dom'

class Grid extends Component {
  render() {
    return (
      <GridContainer columns={this.props.columns}>
        <ul>
          {
            this.props.gridList.map((value, index) => (
              <li key={value.title} onClick={() => this.handleClick(value.id)}>
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


  handleClick = (id) => {
    this.props.history.push('/list', { id })
  }
}

export default withRouter(Grid)