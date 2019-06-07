import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class DetailScreen extends Component {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    return (
      <WebView
        source={{uri: this.props.navigation.getParam('uri')}}
      />
    );
  }
}