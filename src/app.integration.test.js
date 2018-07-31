import {
    myReducer,
    mapDispatchToProps,
    mapStoreStateToProps,
    $App
} from './app'

console.log({
    myReducer,
    mapDispatchToProps,
    mapStoreStateToProps,
    $App
})

import nock from 'nock';
import React from 'react';
import { mount } from 'enzyme'
import { createStore, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';

// import toJson from 'enzyme-to-json'

import colors from 'colors';


// mock something in your APP
import * as utils from './utils';
import utils2 from './utils';
console.log('[utils]', utils);
console.log('[utils2]', utils2);

// only mock utils.func1, and func2 is original.
// utils.func1.mockRestore();


beforeEach(() => {
  console.log('[beforeStarted]');
});

it('integration test sample', (done) => {
    const store = createStore(myReducer)
    const wrapper = mount(
        <Provider store={store}>
            <$App />
        </Provider>,
    )
    console.log(colors.red(wrapper.html()))
    nock('http://www.example.com').get('/a1').reply(200, { mockSuccess: true })
    wrapper.find('button').first().simulate('click')
    nock('http://www.example.com').get('/a1').reply(200, { mockSuccess: true });
    wrapper.find('button').first().simulate('click')
    nock('http://www.example.com').get('/a1').reply(200, { mockSuccess: true });
    wrapper.find('button').first().simulate('click')
    
    // trigger catch of fetch
    wrapper.find('button').first().simulate('click')

    // [first way]
    // const flushAllPromises = () => new Promise(resolve => setTimeout(resolve, 100))
    // return flushAllPromises().then(function(){
    //     console.log(colors.red(wrapper.html()))
    //     wrapper.find('button').last().simulate('click')
    //     console.log(colors.red(wrapper.html()))
    //     expect(wrapper).toMatchSnapshot()
    //     done();
    // });

    // [another way]
    var fd = setInterval(function(){
        if(wrapper.html().indexOf('Del') !== -1){
            console.log(colors.red(wrapper.html()))
            wrapper.find('button').last().simulate('click')
            console.log(colors.red(wrapper.html()))
            expect(wrapper).toMatchSnapshot()
            clearInterval(fd);
            done();
        }
        else{
            console.log(500);
        }
    }, 0);
});

it('another test', (done) => {
    console.log(utils);

    // only mock utils.func1, and func2 is original.
    jest.spyOn(utils, 'func1').mockImplementation(() => 999);

    console.log(utils.func1())

    utils.func1.mockRestore();  // this is important or you will affect next testcase
    console.log(utils.func1());

    alert(200);
    alert(400);

    // ref: https://jestjs.io/docs/en/mock-functions
    // ref: https://jestjs.io/docs/en/22.4/mock-functions  If you are using old version
    expect(alert.mock.calls.length).toBe(2);  // you invoked alert twice before
    expect(alert.mock.calls[0][0]).toBe(200);  // what argument you pass first invoking.
    expect(alert.mock.calls[1][0]).toBe(400);  // what argument you pass second invoking.

    expect(alert.mock.instances.length).toBe(2);  // equal to alert.mock.calls
    
    done();
});