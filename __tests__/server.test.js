'use strict';

const server = require('../server');

const supertest = require('supertest');

const request = supertest(server.app);


describe('testing API server' , () =>{

it('testing /', async() =>{
const res = await request.get('/');
expect(res.text).toEqual('home route');
expect(res.status).toEqual(200);
})

// test bad rout 
it('404 on a bad route', async()=>{
    const res = await request.get('/asd');
    expect(res.status).toEqual(404);
})

// 404 on a bad method
it('404 on a bad method' ,async () =>{
    const response = await request.post(`/person?name=${String}`);
    expect(response.status).toEqual(404);
})

// 500 if no name in the query string
it('500 if no name in the query string' ,async () =>{
    const response = await request.get(`/person`);
    expect(response.status).toEqual(500);
})

// 200 if the name is in the query string
it('200 if the name is in the query string' ,async () =>{
    const response = await request.get(`/person?name=${String}`);
    expect(response.status).toEqual(200);
})

// 200 if the name is in the query string
it('given an name in the query string, the output object is correct' ,async () =>{
    const response = await request.get(`/person?name=mayadah`);
    expect(response.body).toEqual({name:'mayadah'});
})

})

