const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')
const {prdIdsugus, prdIdtegelas, prdIdtebotol } = require('../data/id.js')
const {catIdminuman, catIdpermen} = require('../data/id.js')

console.log(token)
console.log(prdIdsugus)
console.log(prdIdtegelas)
console.log(prdIdtebotol)
console.log(catIdminuman)
console.log(catIdpermen)


describe ('PUT Update Product Sugus', async () => {
    let response = request(baseUrl)
    .put('/products/' + (prdIdsugus))
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "category_id" : catIdpermen,
        "code": "PermenA001",
        "name": "Sugus2",
        "price": "1000",
        "cost": "1000",
        "stock": "40"
    })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response status is not equal to 404', async() => {
        expect((await response).status).to.not.equal(404)
    })
    it('Response name is to include: Sugus2', async() => {
        expect((await response).body.data.name).to.include("Sugus2")
    })
    it('Response name is to not include: Yupi2 (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Yupi2")
    })
})

describe ('PUT Update Product Tegelas', async () => {
    let response = request(baseUrl)
    .put('/products/' + (prdIdtegelas))
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "category_id" : catIdminuman,
        "code": "MinumB001",
        "name": "Tegelas2",
        "price": "4500",
        "cost": "1000",
        "stock": "60"
     })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response status is not equal to 404', async() => {
        expect((await response).status).to.not.equal(404)
    })
    it('Response name is to include: Tegelas2', async() => {
        expect((await response).body.data.name).to.include("Tegelas2")
    })
    it('Response name is to not include: Tekotak2 (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Tekotak2")
    })
})


describe ('PUT Update Product Tebotol', async () => {
    let response = request(baseUrl)
    .put('/products/' + (prdIdtebotol))
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "category_id" : catIdminuman,
        "code": "MinumB002",
        "name": "Tebotol2",
        "price": "6000",
        "cost": "1000",
        "stock": "20"
     })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response status is not equal to 404', async() => {
        expect((await response).status).to.not.equal(404)
    })
    it('Response name is to include: Tebotol2', async() => {
        expect((await response).body.data.name).to.include("Tebotol2")
    })
    it('Response name is to not include: Tesachet2 (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Tesachet2")
    })
})
