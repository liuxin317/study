import React, { Component } from 'react';
import loadImg from '../style/images/load_index.gif';

export default class LoadIndex extends Component {
	state = {
		loadStatus: true
	}

	componentDidMount () {
		setTimeout(() => {
			this.setState({
				loadStatus: false
			})
		}, 2000)
	}

	render () {
		return (
			<div className={ `load ${ !this.state.loadStatus ? 'load-hide' : '' }`}>
				<img src={ loadImg } />
			</div>
		)
	}
}