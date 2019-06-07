import 'react-native';
import React from 'react';
import ListScreen from '../ListScreen'
import renderer from 'react-test-renderer';

jest.mock('../../Axios');

it('renders correctly', () => {
    const tree = renderer.create(<ListScreen></ListScreen>).toJSON();
    expect(tree).toMatchSnapshot();    
});

it('formats time correctly', () => {
    let ls = renderer.create(<ListScreen></ListScreen>);
    let time = '2019-01-01T12:00:00';
    expect(ls.getInstance().formatTime(time)).toEqual('2019-01-01');        
});