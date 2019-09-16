import styled from 'styled-components'

const GridContainer = styled.div `
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: ${props => 100/props.columns}%;
      padding: 0 .05rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      img {
        border-radius: .06rem;
      }
      b {

      }
    }
  }
`

export {
  GridContainer
}