import React, { createContext } from 'react'

let {
  Provider,
  Consumer: MapConsumer
} = createContext()

class MapProvider extends React.PureComponent {
  state = {
    isShowMap: true
  }

  changeStatus = (value) => {
    this.setState({
      isShowMap: value
    })
  }

  render() {
    return (
      <Provider value={{
        isShowMap: this.state.isShowMap,
        changeStatus: this.changeStatus
      }}>
        {this.props.children}
      </Provider>
    )
  }
}

export {
  MapProvider,
  MapConsumer
}