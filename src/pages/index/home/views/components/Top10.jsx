import React, { Component } from 'react'
import { Top10Container } from '../StyledHome'

export default class Top10 extends Component {
  render() {
    return (
      <Top10Container>
        <div>精品好菜</div>
        <ul>
          {
            this.props.list.map((value, index) => (
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
    
  }
}
