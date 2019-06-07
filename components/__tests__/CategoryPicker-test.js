import 'react-native';
import React from 'react';
import CategoryPicker from '../CategoryPicker';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
const tree = renderer.create(<CategoryPicker selectedValue="business"></CategoryPicker>).toJSON();

  expect(tree).toMatchSnapshot();
});