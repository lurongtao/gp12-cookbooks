import React, { Component } from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import './assets/styles/reset.css'
import './assets/styles/animate.css'

import { Index } from './pages/index/index/'
import { List } from './pages/list/'

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/index" component={Index}></Route>
        <Route path="/list" component={List}></Route>
        <Redirect from="/" to="/index" exact></Redirect>
      </Switch>
    )
  }
}