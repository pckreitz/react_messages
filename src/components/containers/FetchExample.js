import React from 'react';
import { FlatList, ActivityIndicator, Text, View, Image, StyleSheet } from 'react-native';

export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://chex-triplebyte.herokuapp.com/api/cats?page=0')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  _renderStory(item){
    return(
      <View style={styles.containers}>
        <Text style={styles.timestamp}>{item.timestamp}</Text>
        <Image source={{uri: (item.image_url)}} style={styles.image_url} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    )
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => this._renderStory(item)}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main:{
    width: 100+'%',
    height: 100+'%',
  },
  containers:{
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timestamp:{
    paddingTop:2.5,
    paddingBottom:7.5,
    fontFamily: 'helvetica'
  },
  title:{
    paddingTop:5,
    fontFamily: 'helvetica'
  },
  image_url:{
    height: 300,
    width: 300
  },
  description:{
    fontFamily: 'helvetica',
    color: 'grey',
    fontSize: 11
  },
})