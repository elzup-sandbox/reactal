import React from 'react';

export default class ReactalRectComponent extends React.Component {
	static defaultProps = {
		level: 3,
		isChild: false,
		number: 0
	}
	static propTypes = {
		level: React.PropTypes.number,
		isChild: React.PropTypes.bool,
		status: React.PropTypes.number
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
				<p className="cell">{this.props.number}</p>
			</div>
		);
	}
}
