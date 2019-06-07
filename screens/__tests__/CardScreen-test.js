import 'react-native';
import React from 'react';
import CardScreen from '../CardScreen'
import renderer from 'react-test-renderer';

jest.mock('../../Axios');

it('renders correctly', () => {
    const tree = renderer.create(<CardScreen></CardScreen>).toJSON();
    expect(tree).toMatchSnapshot();    
});

it('formats content correctly', () => {
    let ls = renderer.create(<CardScreen></CardScreen>);
    let val = 'ABCDEF[+';
    expect(ls.getInstance().formatContent(val)).toEqual('ABCDEF');        
});