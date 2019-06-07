import React from 'react';
import {
  FlatList,
  RefreshControl,
  StyleSheet,
  View,
} from 'react-native';
import { ListItem } from 'react-native-elements'
import CategoryPicker from '../components/CategoryPicker'
import Axios from '../Axios';

export default class ListScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  keyExtractor = (item, index) => index.toString();

  constructor(props) {
    super(props);
    this.state = {
      list: [],
      refreshing: false,
      category: ''
    };
    this.listView = React.createRef();
  }

  componentWillMount() {    
    this.refresh(); 
  }

  formatTime(time) {
    let idx = time.indexOf('T');
    if (idx >= 0) {
      time = time.substring(0, idx);
    }
    return time;
  }

  refresh = () => { 
    this.setState({refreshing: true});
    return Axios.get('/top-headlines', {
      params: {
        category: this.state.category,
        pageSize: 50
      }
    })    
    .then((response) => {            
      if ('data' in response && 'articles' in response.data) {       
        this.setState({list: response.data.articles});
        this.listView.scrollToIndex({index: 0});
        // console.log(JSON.stringify(response.data.articles));
      }      
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      this.setState({refreshing: false});
    });
  }

  renderItem = ({item}) => {
    console.log(item);
    return <ListItem                            
      title={item.title}
      leftAvatar={{source: item.urlToImage ? { uri: item.urlToImage } : null, rounded: false}}
      subtitle={item.source.name + ' | ' + this.formatTime(item.publishedAt)} 
      bottomDivider={true}
      onPress={() => this.props.navigation.navigate('Detail', {uri: item.url})}             
    />
  }

  render() {
    return (
      <View style={styles.container}>
        <CategoryPicker
          selectedValue={this.state.category}
          onValueChange={(itemValue, itemIndex) => {            
            this.setState({category: itemValue}, () => {              
              this.refresh();                      
            });            
          }}
        />           
        <FlatList
          ref={(elm) => this.listView = elm}
          style={styles.container}           
          keyExtractor={this.keyExtractor}
          data={this.state.list}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.refresh}
            />
          }          
          renderItem={this.renderItem}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },  
});
