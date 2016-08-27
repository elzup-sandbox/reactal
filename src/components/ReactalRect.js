import React from 'react';

export default class ReactalRectComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			counter: 0
		}
		this.countUp = this.countUp.bind(this)
	}

	static defaultProps = {
		level: 3,
		isChild: false
	}

	static propTypes = {
		level: React.PropTypes.number,
		isChild: React.PropTypes.bool,
		status: React.PropTypes.number
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
		if (this.props.level > 0) {
			return (
				<div className="reactal_rect" style={style}>
					<ReactalRectComponent isChild={true} level={this.props.level - 1}/>
					<ReactalRectComponent isChild={true} level={this.props.level - 1}/>
					<ReactalRectComponent isChild={true} level={this.props.level - 1}/>
					<ReactalRectComponent isChild={true} level={this.props.level - 1}/>
				</div>)
		}

		return (
			<div className="reactal_rect" style={style}>
				<a className="cell" onClick={this.countUp}>{this.state.counter}</a>
			</div>
		);
	}
}
