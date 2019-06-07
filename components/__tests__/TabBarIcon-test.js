import 'react-native';
import React from 'react';
import TabBarIcon from '../TabBarIcon';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<TabBarIcon name="md-list"></TabBarIcon>).toJSON();

  expect(tree).toMatchSnapshot();
});