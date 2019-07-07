import React, { Component } from 'react';
import {
	Text,
	View,
	FlatList
} from 'react-native';
import styles from './style';
import scale from '../../utils/scale';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const listArray = [
	{ 
		id:1,
		heading: 'Supporters of the Democratic candidate Jon Ossoff after his ...',
		content: 'By DAVID LEONHARDT and STUART A. THOMPSON',
	},
	{ 
		id:2,
		heading: 'Supporters of the Democratic candidate Jon Ossoff after his ...',
		content: 'By DAVID LEONHARDT and STUART A. THOMPSON',
	},
];

export default class HomeComponent extends Component {

	constructor(props) {
		super(props);
	}

	renderHeaderBar() {
		const headerText = 'NY Times Most Popular';
		return (
			<View style={styles.headerContainer}>
				<Feather name={'menu'} color={'white'} size={scale(18)}  />
				<Text style = {styles.headerText}>{headerText}</Text>
				<Ionicons name={'md-search'} color={'white'} size={scale(22)} />
				<SimpleLineIcons name={'options-vertical'} color={'white'} size={scale(16)} />
			</View>
		);
	}

	renderListItems(item) {
		return (
			<View style = {styles.itemCellContainer} >
				<View style = {styles.imageContainer} >
					<View style = {styles.circleStyle} />
				</View>
				<View style = {{flex:0.7, paddingHorizontal: scale(15)}} >
					<Text>
						{item.heading}
					</Text>
					
					<Text style = {styles.contentText} >
						{item.content}
					</Text>

				</View>

				<View style ={styles.imageContainer} >
					<Entypo name={'chevron-right'} size={20} color={'rgb(154,154,154)'} />
				</View>
			</View>
		);
	}

	renderBodyContainer() {
		return(
			<View style = {{backgroundColor:'rgb(247,247,247)', flex:1}} >
				<FlatList
					data={listArray}
					keyExtractor={(item)=>item.id.toString()}
					renderItem={({ item })=> this.renderListItems(item)}
				/>
			</View>
		);
	}

	render() {
		return (
			<View style={styles.container} >
				{this.renderHeaderBar()}
				{this.renderBodyContainer()}
			</View>
		);
	}
} 
