require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ReactalRectComponent from './ReactalRect';

class AppComponent extends React.Component {
	static defaultProps = {
		test: React.PropTypes.number
	}

	render() {
		return (
			<div className="index">
				<ReactalRectComponent level={5} parentCall={() => ''}/>
				<div className="notice">Please edit <code>src/components/Main.js</code>
					to get started!
				</div>
			</div>
		);
	}
}

export default AppComponent;
