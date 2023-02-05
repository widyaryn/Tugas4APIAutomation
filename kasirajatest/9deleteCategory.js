const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')
const {prdIdsugus, prdIdtegelas, prdIdtebotol, catIdpermen, catIdminuman } = require('../data/id.js')

console.log(token)
console.log(prdIdsugus)
console.log(prdIdtegelas)
console.log(prdIdtebotol)

describe ('DELETE Category Permen', async () => {
    let response = request(baseUrl)
    .delete('/categories/' + (catIdpermen))
    .set({ "Authorization": "Bearer " + (token)})
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response body status is to include: success', async() => {
        expect((await response).body.status).to.include("success")
    })
    it('Response body status is to not include: fail (negatif)', async() => {
        expect((await response).body.status).to.not.include("fail")
    })
})


describe ('DELETE Category Minuman', async () => {
    let response = request(baseUrl)
    .delete('/categories/' + (catIdminuman))
    .set({ "Authorization": "Bearer " + (token)})
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response body status is to include: success', async() => {
        expect((await response).body.status).to.include("success")
    })
    it('Response body status is to not include: fail (negatif)', async() => {
        expect((await response).body.status).to.not.include("fail")
    })
})

