import React from 'react'
import { NavBar, Icon, ListView, PullToRefresh } from 'antd-mobile'
import { ListContainer, ListItems, ListItem, Burdens } from './StyledList'

function MyBody(props) {
  return (
    <ListItems>
      {props.children}
    </ListItems>
  )
}


const row = (value, sectionID, rowID) => {
  return (
    <ListItem key={rowID}>
      <div>
        <img src={value.img} alt=""/>
      </div>
      <div>
        <p>{value.name}</p>
        <Burdens>{value.burdens}</Burdens>
        <p><span>{value.all_click}</span>浏览 <span>{value.favorites}</span>收藏</p>
      </div>
    </ListItem>
  )
}

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
      <ListView
        dataSource={props.list}
        renderBodyComponent={() => <MyBody />}
        renderRow={row}
        style={{
          height: document.documentElement.clientHeight - 44,
          overflow: 'auto',
        }}
        pageSize={4}
        scrollRenderAheadDistance={500}
        onEndReached={props.onEndReached}
        onEndReachedThreshold={10}
        pullToRefresh={
          <PullToRefresh
            onRefresh={props.onRefresh}
            refreshing={props.refreshing}
          ></PullToRefresh>
        }
      />
    </ListContainer>
  )
}

export default ListUI