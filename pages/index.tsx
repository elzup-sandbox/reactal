import React from 'react'
import ReactalRectComponent from '../src/components/ReactalRect'
import '../src/styles/App.css'

class Main extends React.Component {
  render() {
    return (
      <div className="index">
        <ReactalRectComponent level={5} />
        <div className="notice">
          Please edit <code>src/components/Main.js</code>
          to get started!
        </div>
      </div>
    )
  }
}

export default Main
