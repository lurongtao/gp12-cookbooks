import styled from 'styled-components'

import iconStyled from 'components/styled/icons.js'
import border from 'components/styled/border.js'

const SearchContainer = iconStyled(
  styled.div `
    padding: .12rem .15rem;
    background: ${props => props.outerBg};
  `
)

const BorderedContainer = border({
  color: '#ee742f',
  radius: 6,
  comp: styled.div `
    height: .4rem;
    border-radius: .06rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${props => props.innerBg};
    i {
      font-family: 'iconfont';
      color: #ee742f;
      padding-right: .06rem;
    }
    input {
      background: transparent;
      border: 0;
      width: 1.6rem;
    }
  `
})

export {
  SearchContainer,
  BorderedContainer
}