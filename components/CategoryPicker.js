import React from 'react';
import { Picker, View } from 'react-native'

export default class CategoryPicker extends React.Component {
  render() {
    return <>
        <Picker
        selectedValue={this.props.selectedValue}
        style={{height: 50, marginTop: 25}}            
        onValueChange={this.props.onValueChange}         
        >
        <Picker.Item label="Berita Teratas" value="" />
        <Picker.Item label="Bisnis" value="business" />
        <Picker.Item label="Hiburan" value="entertainment" />
        <Picker.Item label="Kesehatan" value="health" />
        <Picker.Item label="Sains" value="science" />
        <Picker.Item label="Olah Raga" value="sports" />
        <Picker.Item label="Teknologi" value="technology" />
    </Picker> 
    <View style={{height: 1, backgroundColor: 'lightgrey'}}/>
    </>
  }
}