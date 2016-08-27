import React from 'react';

export default class ReactalRectComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
		this.countUp = this.countUp.bind(this)
		this.parentCall = this.parentCall.bind(this);
	}

	static defaultProps = {
		level: 3,
		isChild: false
	}

	static propTypes = {
		level: React.PropTypes.number,
		isChild: React.PropTypes.bool,
		status: React.PropTypes.number,
		parentCall: React.PropTypes.func.isRequired
	}

	countUp() {
		this.setState({counter: this.state.counter + 1});
	}

	render() {
		const rootStyle = {
			width: '100%',
			padding: 0,
			margin: 0
		}
		const style = this.props.isChild ? {} : rootStyle
		const children = Array.from({length: 4}, (v, k) => (
			<ReactalRectComponent
				key={k}
				parentCall={this.parentCall}
				isChild={true}
				level={this.props.level - 1}/>
		))
		if (this.props.level > 0) {
			return (
				<div className="reactal_rect" style={style}>
					{children}
				</div>)
		}

		return (
			<div className="reactal_rect" style={style}>
				<button className="cell" onClick={this.countUp}>{this.state.counter}</button>
			</div>
		);
	}

	parentCall() {
		if (this.props.isChild) {
			this.props.parentCall();
		}
	}

	componentWillUpdate() {
		this.props.parentCall();
	}
}
