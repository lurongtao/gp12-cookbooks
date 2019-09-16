import React, { Component } from 'react'

import {
  SearchContainer,
  BorderedContainer
} from './StyledSearch'

export default class Search extends Component {
  render() {
    return (
      <SearchContainer {...this.props}>
        <BorderedContainer {...this.props}>
          <i>&#xe63a;</i>
          <input type="text" placeholder="想吃什么搜这里，如川菜"/>
        </BorderedContainer>
      </SearchContainer>
    )
  }
}
