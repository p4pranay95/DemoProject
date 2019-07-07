import { secureFetchGet } from '../utils/sendJSON';
import * as CONST from '../utils/Const';

export function getList(section, period, callback){
	secureFetchGet(`mostviewed/${section}/${period}.json?apikey=`)
		.then(([response, data]) =>{
			console.log('homeService home response ', data);
			if (response.status === 200 ) {
				callback({result: CONST.SUCCESS, data: data });
			} else {
				callback({
					result: CONST.FAILURE,
					data: data,
				});
			}
		}).catch((error) => {
			console.log('homeService home response ', error.message);
			callback({
				result: CONST.FAILURE,
				data: error,
			});
		});
}
