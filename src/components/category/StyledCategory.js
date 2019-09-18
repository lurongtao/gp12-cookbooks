import styled from 'styled-components'

import border from 'components/styled/border'

const CategoryContainer = border({
  width: '1px 0 0 0',
  comp: styled.div `
    flex: 1;
    display: flex;
    overflow: hidden;
    >div:first-child {
      width: .9rem;
      background: #f3f3f3;
      ul {
        li {
          height: .5rem;
          text-align: center;
          span {
            display: inline-block;
            height: 100%;
            line-height: .5rem;
          }
          &.active {
            background: #fff;
            span {
              border-bottom: solid .02rem #ee742f;
              color: #ee742f;
            }
          }
        }
      }
    }

    >div:last-child {
      flex: 1;
      background: #fff;
      ul {
        display: flex;
        flex-wrap: wrap;
        padding: .10rem 0;
        li {
          width: 33.333333%;
          height: .5rem;
          text-align: center;
          line-height: .5rem;
        }
      }
    }
  `
})

export {
  CategoryContainer
}