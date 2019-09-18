import React, { Component } from 'react'

import {
  SearchContainer,
  BorderedContainer,
  NoneBorderContainer
} from './StyledSearch'

export default class Search extends Component {
  render() {
    const BorderContainer = this.props.hasBorder ? BorderedContainer : NoneBorderContainer
    return (
      <SearchContainer {...this.props}>
        <BorderContainer {...this.props}>
          <i>&#xe63a;</i>
          <input type="text" placeholder="想吃什么搜这里，如川菜"/>
        </BorderContainer>
      </SearchContainer>
    )
  }
}
