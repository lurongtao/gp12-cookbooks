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

class Category extends PureComponent {
  state = {
    dir: 'left'
  }

  render() {
    return (
      <CateContainer>
        <header>
          <SlideContainer className={this.props.location.pathname === '/category' ? 'left' : 'right'}>
            <li onClick={() => this.handleClick('left')} className={this.props.location.pathname === '/category' ? 'active' : ''}>分类</li>
            <li onClick={() => this.handleClick('right')} className={this.props.location.pathname === '/material' ? 'active' : ''}>食材</li>
          </SlideContainer>
        </header>
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
