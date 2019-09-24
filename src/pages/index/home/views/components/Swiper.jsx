import React, { PureComponent } from 'react'

import { Carousel } from 'antd-mobile'

export default class Swiper extends PureComponent {
  render() {
    let swiperList = this.props.list.slice(0, 5)
    return (
      swiperList.length > 0 && (<Carousel className="my-carousel"
        dots={true}
        dragging={true}
        swiping={true}
        autoplay
        infinite
      >
        {
          swiperList.map((value, index) => (
            <img key={value.id} src={value.img} alt=""/>
          ))
        }
      </Carousel>)
    )
  }

  async componentDidMount() {
    
  }
}
