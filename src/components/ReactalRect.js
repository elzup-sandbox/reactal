import React from 'react';

export default class ReactalRectComponent extends React.Component {
	static defaultProps = {
		level: 4,
		isChild: false
	}
	static propTypes = {
		level: React.PropTypes.number,
		isChild: React.PropTypes.bool
	}

	render() {
		const childStyle = {
			width: '50%',
			height: '50%'
		}
		const rootStyle = {
			width: '100%',
			height: '100%'
		}
		const style = this.props.isChild ? childStyle : rootStyle
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
			<div className="reactal_rect">
				x
			</div>
		);
	}
}
