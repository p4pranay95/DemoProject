import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeComponent from './HomeComponent';

class HomeContainer extends Component {

	render() {
		return (
			<HomeComponent {...this.props} />
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	
	};
};

function mapStateToProps(state) {
	const { homeReducer } = state;
	return {
	
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);