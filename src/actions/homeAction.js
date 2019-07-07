import {getList} from '../services/homeService';
import { startSpinner, stopSpinner} from './commonAction';
import * as CONST from '../utils/Const';

export function getListAct(email, password){
	return async(dispatch, getState) => {
		dispatch(startSpinner());
		dispatch({type: CONST.RESET_SECTION_LIST});
		try{
			await getList(email, password, (response) => {
				if(response.result === CONST.SUCCESS){
					dispatch(stopSpinner());
					dispatch({
						type: CONST.SECTION_LIST_SUCCESS,
						payload: response.data,
					});
				}
				else if(response.result === CONST.FAILURE){
					dispatch(stopSpinner());
					dispatch({
						type: CONST.SECTION_LIST_FAILED,
						payload: response.data,
					});
				}
			});
		} catch(err){
			dispatch(stopSpinner());
			dispatch({
				type: CONST.SECTION_LIST_FAILED,
				payload: err,
			});
		}
	};
}