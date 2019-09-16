import styled from 'styled-components'

const HomeContainer = styled.div `
  background: #fff;
  header {
    height: .44rem;
    background: #ee742f;
    color: white;
    font-size: .2rem;
    line-height: .44rem;
    text-align: center;
    font-weight: 100;
  }
  > div {
    img {
      width: 100%
    }
  }
  /* ul.slider-list {
    height: 2rem !important;
  } */
  .slider.am-carousel.my-carousel {
    height: 0 !important;
    padding-bottom: 66.666667% !important;
    .slider-list {
      padding-bottom: 66.666667% !important;
    }
  }
`

const HotCateContainer = styled.div `
  div {
    padding: 0 .10rem;
    color: #666;
    line-height: .45rem;
    font-size: .14rem;
  }
  div:first-child {
    height: .45rem;
    padding-left: .15rem;
  }
`

const Top10Container = styled.div `
  background: #F5F5F5;
  > div {
    height: .37rem;
    padding: 0 .15rem;
    display: table-cell;
    vertical-align: bottom;
    color: #666;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      dl {
        background: #fff;
        dt {
        }
        dd {
          padding: .1rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          h2 {
            font-weight: normal;
            font-size: .2rem;
          }
          h3 {
            font-weight: normal;
            font-size: .12rem;
            color: #999;
          }
        }
      }
      padding-top: .15rem;

      &:nth-child(odd) {
        padding-left: .15rem;
        padding-right: calc(.15rem/2);
      }
      &:nth-child(even) {
        padding-right: .15rem;
        padding-left: calc(.15rem/2);
      }
    }
  }
`

export {
  HomeContainer,
  HotCateContainer,
  Top10Container
}