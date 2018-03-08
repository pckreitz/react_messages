import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AddMessage } from '../presentation'
import { FetchExample } from '../containers'

class Messages extends Component{

	constructor(){
		super()
		this.state={
			messages:[
				{id: 1, from: 'You', content: 'What'},
				{id: 2, from: 'It', content: 'What'},
				{id: 3, from: 'It', content: 'What'},
				{id: 4, from: 'It', content: 'What'},
				{id: 5, from: 'It', content: 'What'}
			]
		}
	}

	_renderMessage(item){
		return(
			<View style={styles.messages}>
				<Text style={[styles.messageText, {paddingTop: 5}]}>From: {item.from}</Text>
				<Text style={[styles.messageText, {paddingBottom: 5}]}>{item.content}</Text>
			</View>
		)
	}

	render(){
		return(
			<View style={styles.main}>
				<FlatList
					keyExtractor={(item)=>(item.id)}
					data={this.state.messages}
					renderItem={({item})=>this._renderMessage(item)}
				/>
				<AddMessage />
				<FetchExample />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	main:{
		width: 100+'%',
		height: 100+'%'
	},
	messages:{
		borderBottomWidth: 1,
		borderColor: 'rgb(77,80,88)'
	},
	messageText:{
		fontFamily: 'helvetica',
		color: 'rgb(12,0,41)'
	}
})

export default Messages