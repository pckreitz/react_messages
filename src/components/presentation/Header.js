import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar } from 'react-native'

class Header extends Component{
	render(){
		return(
			<View style={styles.topNav}>
				<StatusBar barStyle={'light-content'}/>
				<Text style={styles.text}>{this.props.text}</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	topNav:{
		position: 'absolute',
		top: 0,
		paddingTop: 40,
		paddingBottom: 20,
		backgroundColor: 'rgb(12,0,41)',
		width: 100+'%',
		height: 70,
		justifyContent: 'center'
	},
	text:{
		color: 'rgb(255,255,255)',
		fontFamily: 'helvetica',
		alignSelf: 'center'
	}
})

export default Header