import React from 'react'

import { CSSTransition } from 'react-transition-group'

import BScroll from 'better-scroll'

export default (Comp) => {
  return class extends React.Component {
    render() {
      let state = this.props.location.state
      let { dir } = state || {dir: 'left'}
      return (
        <CSSTransition
          in={!!this.props.match}
          timeout={1000}
          classNames={{
            enter: 'animated',
            enterActive: state ? (dir === 'left' ? 'slideInLeft' : 'slideInRight') : '',
            exit: 'animated',
            exitActive: dir === 'left' ? 'slideOutRight' : 'slideOutLeft'
          }}
          unmountOnExit
          mountOnEnter
          onEntered={() => {
            new BScroll('.menu_left', {
              click: true
            })
            new BScroll('.menu_right', {
              click: true
            })
          }}
        >
          <Comp></Comp>
        </CSSTransition>
      )
    }
  }
}