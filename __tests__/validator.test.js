'use strict';

const validator = require('../src/middleware/validator');

describe('test validator middleware' , () =>{

it('show error when no name', () =>{
let req = {query:{}};
let res = {};
let next = jest.fn();

validator(req,res,next);
expect(next).toHaveBeenCalledWith('enter a name !!')
})


it('run successfully when there is a name in the query', () =>{
    let req = {query:{name:'mayadah'}};
    let res = {};
    let next = jest.fn();
    
    validator(req,res,next);
    expect(next).toHaveBeenCalled();
    })

})