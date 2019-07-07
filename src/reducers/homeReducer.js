/**
 *
 * HOME REDUCER !
 *
 */

import * as CONST from '../utils/Const';

const initialState = {
	token: '',
	status: false,
	message: '',
};

export default function (state = initialState, action) {
	switch (action.type) {
	case CONST.RESET_SECTION_LIST:
		return {
			...state,
			status: false,
			message: '',
			authToken: '',
		};
	case CONST.SECTION_LIST_SUCCESS:
		return {
			...state,
			status: true,
			message: 'User logged in successfully',
		};
	case CONST.SECTION_LIST_FAILED:
		return {
			...state,
			status: false,
			message: 'Failed',
			authToken: '',
		};
	default: return state;
	}
}