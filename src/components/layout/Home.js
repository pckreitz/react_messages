import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Header } from '../presentation'
import { Messages } from '../containers'

class Home extends Component{
	render(){
		return(
			<View style={styles.container}>
				<Header text={'All Messages'}/>
				<View style={{marginTop: 70}}>
					<Messages />
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor:'rgb(255,255,255)'
	},
})

export default Home