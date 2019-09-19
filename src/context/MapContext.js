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

    localStorage.setItem('isShowMap', value)
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

  componentDidMount() {
    let isShowMap = JSON.parse(localStorage.getItem('isShowMap') || 'true')
    this.changeStatus(isShowMap)
  }
}

export {
  MapProvider,
  MapConsumer
}