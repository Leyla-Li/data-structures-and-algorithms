'use strict';

const functions = require('../repeated-word');
const getWords = functions.getWords;

describe('test for finding the first word that is repeated within the given string', ()=>{

  it('returns empty string if there is no repeated word', ()=>{
    let string = 'hello there';
    expect(getWords(string)).toEqual('');
  });

  it('returns the first repeated word', ()=>{
    let string = 'hello there hello';
    expect(getWords(string)).toEqual('hello');
  });

  it('only returns the first repeated word', ()=>{
    let string = 'hello there hello there';
    expect(getWords(string)).toEqual('hello');
  });

});
