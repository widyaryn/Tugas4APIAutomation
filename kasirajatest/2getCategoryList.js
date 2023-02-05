const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')

console.log(token)

describe ('GET Category list', async () => {
    let response = request(baseUrl)
    .get('/categories')
    .set({ "Authorization": "Bearer " + (token)})
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response body status is to include: success', async() => {
        expect((await response).body.status).to.include("success")
    })
    it('Response body status is to not include: fail', async() => {
        expect((await response).body.status).to.not.include("fail")
    })
})
