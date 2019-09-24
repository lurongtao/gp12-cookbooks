import styled from 'styled-components'
import border from 'components/styled/border.js'
import ellipsis from 'components/styled/ellipsis.js'

const ListContainer = styled.div `
  .am-navbar {
    background: #ee742f;
  }
`

const ListItems = styled.div `

` 

const ListItem = border({
  width: '0 0 1px 0',
  comp: styled.li `
    display: flex;
    padding: .1rem;
    background: #fff;
    > div:first-child {
      width: 1.3rem;
      img {
        width: 1.15rem;
        height: .75rem;
      }
    }
    > div:last-child {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
      > p:first-child {
        font-size: .18rem;
      }
      > p:nth-child(2) {
        font-size: .16rem;
        color: #666;
      }
      > p:nth-child(3) {
        font-size: .12rem;
        color: #666;
      }
    }
  `
})

const Burdens = ellipsis({
  comp: styled.p `

  `
})



export {
  ListContainer,
  ListItems,
  ListItem,
  Burdens
}