import React from 'react';

export default class ReactalRectChildComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
		this.countUp = this.countUp.bind(this)
		this.parentCall = this.parentCall.bind(this);
	}

	static defaultProps = {
		level: 3
	}

	static propTypes = {
		level: React.PropTypes.number,
		status: React.PropTypes.number,
		parentCall: React.PropTypes.func.isRequired
	}

	countUp() {
		this.setState({counter: this.state.counter + 1});
	}

	render() {
		const children = Array.from({length: 4}, (v, k) => (
			<ReactalRectChildComponent
				key={k}
				parentCall={this.parentCall}
				isChild={true}
				level={this.props.level - 1}/>
		))
		if (this.props.level > 0) {
			return (
				<div className="reactal_rect">
					{children}
				</div>)
		}

		return (
			<div className="reactal_rect">
				<button className="cell" onClick={this.countUp}>{this.state.counter}</button>
			</div>
		);
	}

	parentCall() {
		this.props.parentCall();
	}

	componentWillUpdate() {
		this.props.parentCall();
	}
}
