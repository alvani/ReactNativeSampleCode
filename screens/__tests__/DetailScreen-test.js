import 'react-native';
import React from 'react';
import DetailScreen from '../DetailScreen'
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<DetailScreen navigation={{getParam: (uri) => {}}}></DetailScreen>).toJSON();
    expect(tree).toMatchSnapshot();    
});