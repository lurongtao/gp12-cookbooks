import styled from 'styled-components'

import border from 'components/styled/border.js'

const CateContainer = styled.div `
  header {
    height: .44rem;
    background: #ee742f;
    display: flex;
    justify-content: center;
    align-items: center;
    ul {
      width: 1.4rem;
      height: .3rem;
      display: flex;
      position: relative;
      /* border-radius: .15rem;
      border: solid 1px #fff; */
      li {
        flex: 1;
        line-height: .3rem;
        text-align: center;
        color: #fff;
        &.active {
          color: #ee742f;
          z-index: 10000;
        }
      }

      &::before {
        position: absolute;
        content: '';
        width: .7rem;
        height: .3rem;
        border-radius: .15rem;
        z-index: 9999;
        background: #fff;
      }
    }
  }
`

const SlideContainer = border({
  radius: 15,
  color: '#fff',
  comp: styled.ul ``
})

export {
  CateContainer,
  SlideContainer
}