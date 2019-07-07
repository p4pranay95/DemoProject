import { StackActions, NavigationActions } from 'react-navigation';

export default function(toRoute,navigation,params={}){
	const resetAction = StackActions.reset({
		index: 0,
		actions: [NavigationActions.navigate({ routeName: toRoute, params})]
	});
	navigation.dispatch(resetAction);
}
