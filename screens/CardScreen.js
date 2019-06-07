import React from 'react';
import { 
  StyleSheet, 
  TouchableHighlight, 
  Text
} from 'react-native'
import { Card } from 'react-native-elements'
import ListScreen from './ListScreen'

export default class CardScreen extends ListScreen {
    formatContent(val) {
      if (val) {
        let idx = val.indexOf('[+');
        if (idx >= 0) {
          val = val.substring(0, idx);
        }
      }
      return val;
    }    

    renderItem = ({item}) => (
      <TouchableHighlight onPress={() => this.props.navigation.navigate('Detail', {uri: item.url})}>
      <Card                                    
        image={item.urlToImage ? { uri: item.urlToImage } : null}                
      >
        <Text style={styles.title}>
          {item.title} 
        </Text>
        <Text style={styles.dateSource}>
          {item.source.name + '  |  ' + this.formatTime(item.publishedAt)} 
        </Text>
        <Text style={styles.content}>
          {this.formatContent(item.content)} 
        </Text>        
      </Card>
      </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold', 
    fontSize: 20, 
    marginBottom: 5
  },  
  dateSource: {
    fontWeight: 'bold'
  },
  content: {
    textAlign: 'justify'
  }
});