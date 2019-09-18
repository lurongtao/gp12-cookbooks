import React, { PureComponent } from 'react'

import {
  CateContainer,
  SlideContainer
} from './StyledCategory'

import {
  Route,
  withRouter,
  Switch,
  Redirect
} from 'react-router-dom'

import Cate from './component/Category'
import Material from './component/Material'

import Search from 'components/search/Search'

class Category extends PureComponent {
  static getDerivedStateFromProps(nextProps, prevState) {
    let pathname = nextProps.location.pathname
    return {
      dir: pathname === '/category' ? 'left' : 'right'
    }
  }

  state = {
    dir: 'left'
  }

  render() {
    return (
      <CateContainer>
        <header>
          <SlideContainer className={this.state.dir}>
            <li onClick={() => this.handleClick('left')} className={this.state.dir === 'left' ? 'active' : ''}>分类</li>
            <li onClick={() => this.handleClick('right')} className={this.state.dir === 'right' ? 'active' : ''}>食材</li>
          </SlideContainer>
        </header>
        <Search outerBg="#fff" innerBg="#f5f5f5" hasBorder={false}></Search>
        <Switch>
          <Route path="/category" component={Cate}></Route>
          <Route path="/material" component={Material}></Route>
          <Redirect from="/" exact to="/category"></Redirect>
        </Switch>
      </CateContainer>
    )
  }

  handleClick = (dir) => {
    this.setState({
      dir
    })

    this.props.history.push(dir === 'left' ? '/category' : '/material')
  }
}

export default withRouter(Category)
