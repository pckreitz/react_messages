import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import config from '../../config'

class AddMessage extends Component{

	constructor(){
		super()
		this.state = {
			showInputs: false,
		}
	}

	toggle(){
		if(this.state.showInputs){
			alert('Message Sent')
		}
		this.setState({
			showInputs: !this.state.showInputs
		})
	}

	render(){
		const buttonType = (this.state.showInputs) ? config.images.send : config.images.plus

		return(
			<View>
				{ (this.state.showInputs) ?
				<View style={{backgroundColor:'red'}}>
					<View>
						<Text>For</Text>
						<TextInput />
					</View>
					<View>
						<Text>Text</Text>
						<TextInput />
					</View>
				</View>
					: null
				}
				<TouchableOpacity
					onPress={()=>this.toggle()}
					style={styles.circle}>
					<Image source={buttonType}
						style={{height: 40, width: 40}}/>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	circle:{
		height: 75,
		width: 75,
		borderRadius: 50,
		backgroundColor: 'rgb(100, 200, 110)',
		position: 'absolute',
		bottom: 10,
		right: 10,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

export default AddMessage