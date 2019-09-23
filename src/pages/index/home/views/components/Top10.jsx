import React, { Component } from 'react'
import { Top10Container } from '../StyledHome'
import http from 'utils/http'
export default class Top10 extends Component {
  state = {
    top10List: []
  }

  render() {
    return (
      <Top10Container>
        <div>精品好菜</div>
        <ul>
          {
            this.state.top10List.map((value, index) => (
              <li key={value.id}>
                <dl>
                  <dt>
                    <img src={value.img} alt=""/>
                  </dt>
                  <dd>
                    <h2>{value.name}</h2>
                    <h3><span>{value.all_click}</span>浏览 <span>{value.favorites}</span>收藏</h3>
                  </dd>
                </dl>
              </li>
            ))
          }
        </ul>
      </Top10Container>
    )
  }

  async componentDidMount() {
    let result = await http.get({url: '/api/swiper'})
    this.setState({
      top10List: result.data.slice(0, 10)
    })
  }
}
