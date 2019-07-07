import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeContainer from './components/Home/HomeContainer';

const navigationOptions = {
	headerStyle: {
		backgroundColor: '#f4511e',
		height: 50,
		justifyContent: 'center',
		elevation: 0,
	},
	headerTitleStyle: {
		justifyContent: 'flex-end',
		fontWeight: 'bold',
	},
	headerTintColor: '#FFFFFF',
};

const MainStack = createStackNavigator({
	HomeScreen: { screen: HomeContainer, navigationOptions: { header: null } },
}, {
	headerMode: 'screen',
}, {
	navigationOptions
});

export function setRootNavigation(navigation){
	this.rootNavigation = navigation;
}

export function getRootNavigation(){
	return this.rootNavigation;
}

export default AppRoute = createAppContainer(MainStack);



