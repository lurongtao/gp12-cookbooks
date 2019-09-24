import React from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { ListContainer, ListItems, ListItem, Burdens } from './StyledList'

const ListUI = (props) => {
  return (
    <ListContainer>
      <NavBar
        mode="dark"
        leftContent="返回"
        onLeftClick={props.onBack}
        rightContent={[
          <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
          <Icon key="1" type="ellipsis" />,
        ]}
      >鱼</NavBar>
      <ListItems>
        <ul>
          {
            props.list.map((value, index) => (
              <ListItem key={value.id + index}>
                <div>
                  <img src={value.img} alt=""/>
                </div>
                <div>
                  <p>{value.name}</p>
                  <Burdens>{value.burdens}</Burdens>
                  <p><span>{value.all_click}</span>浏览 <span>{value.favorites}</span>收藏</p>
                </div>
              </ListItem>
            ))
          }
        </ul>
      </ListItems>
    </ListContainer>
  )
}

export default ListUI