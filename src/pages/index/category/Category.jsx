import React, { Component } from 'react'

import {
  CateContainer,
  SlideContainer
} from './StyledCategory'

export default class Category extends Component {
  render() {
    return (
      <CateContainer>
        <header>
          <SlideContainer>
            <li className="active">分类</li>
            <li>食材</li>
          </SlideContainer>
        </header>
      </CateContainer>
    )
  }
}
