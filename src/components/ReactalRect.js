import React from 'react'
import ReactalRectChildComponent from './ReactalRectChild'

export default class ReactalRectComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.countUp = this.countUp.bind(this)
    this.parentCall = this.parentCall.bind(this)
  }

  static defaultProps = {
    level: 3,
  }

  countUp() {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {
    const children = Array.from({ length: 4 }, (v, k) => (
      <ReactalRectChildComponent
        key={k}
        parentCall={this.parentCall}
        level={this.props.level - 1}
      />
    ))
    return <div className="reactal_rect root">{children}</div>
  }

  parentCall() {}

  componentWillUpdate() {
    this.props.parentCall()
  }
}
