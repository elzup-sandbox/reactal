import React from 'react'
import Reactal from '../src/components/Reactal'
import '../src/styles/App.css'

class Main extends React.Component {
  render() {
    return (
      <div className="index">
        <Reactal level={5} />
        <div className="notice">
          Please edit <code>src/components/Main.js</code>
          to get started!
        </div>
      </div>
    )
  }
}

export default Main
