const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')
const {prdIdsugus, prdIdtegelas, prdIdtebotol } = require('../data/id.js')

console.log(token)
console.log(prdIdsugus)
console.log(prdIdtegelas)
console.log(prdIdtebotol)

describe ('GET Product list', async () => {
    let response = request(baseUrl)
    .get('/products')
    .set({ "Authorization": "Bearer " + (token)})
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response body status is to include: success', async() => {
        expect((await response).body.status).to.include("success")
    })
})

describe ('GET Product Detail Sugus', async () => {
    let response = request(baseUrl)
    .get('/products/'+(prdIdsugus))
    .set({
        "Authorization": "Bearer " + (token) 
    })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response name is to include: Sugus', async() => {
        expect((await response).body.data.product.name).to.include("Sugus")
    })
    it('Response name is to not include: Yupi (negatif)', async() => {
        expect((await response).body.data.product.name).to.not.include("Yupi")
    })
})

describe ('GET Product Detail Tegelas', async () => {
    let response = request(baseUrl)
    .get('/products/'+(prdIdtegelas))
    .set({
        "Authorization": "Bearer " + (token) 
    })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response name is to include: Tegelas', async() => {
        expect((await response).body.data.product.name).to.include("Tegelas")
    })
    it('Response name is to not include: Tekotak (negatif)', async() => {
        expect((await response).body.data.product.name).to.not.include("Tekotak")
    })
})



describe ('GET Product Detail Tebotol', async () => {
    let response = request(baseUrl)
    .get('/products/'+(prdIdtebotol))
    .set({
        "Authorization": "Bearer " + (token) 
    })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response name is to include: Tebotol', async() => {
        expect((await response).body.data.product.name).to.include("Tebotol")
    })
    it('Response name is to not include: Tesachet (negatif)', async() => {
        expect((await response).body.data.product.name).to.not.include("Tesachet")
    })
})

