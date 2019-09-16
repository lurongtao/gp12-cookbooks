import React, { PureComponent } from 'react'

import { Carousel } from 'antd-mobile'
import http from 'utils/http'
export default class Swiper extends PureComponent {
  state = {
    swiperList: []
  }

  render() {
    return (
      this.state.swiperList.length > 0 && (<Carousel className="my-carousel"
        dots={true}
        dragging={true}
        swiping={true}
        autoplay
        infinite
      >
        {
          this.state.swiperList.map((value, index) => (
            <img key={value.id} src={value.img} alt=""/>
          ))
        }
      </Carousel>)
    )
  }

  async componentDidMount() {
    let result = await http.get({url: '/api/swiper'})
    this.setState({
      swiperList: result.data.slice(0, 5)
    })
  }
}
