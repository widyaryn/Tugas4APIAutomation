const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')
const {catIdminuman, catIdpermen} = require('../data/id.js')

console.log(token)
console.log(catIdminuman)
console.log(catIdpermen)

describe ('POST Add Product Sugus', async () => {
    let response = request(baseUrl)
    .post('/products')
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "category_id" : catIdpermen,
        "code": "PermenA001",
        "name": "Sugus",
        "price": "5000",
        "cost": "1000",
        "stock": "20"
    })
    //assert
    it('Response status is equal to 201', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })
    it('Response name is to include: Sugus', async() => {
        expect((await response).body.data.name).to.include("Sugus")
    })
    it('Response name is to not include: Yupi (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Yupi")
    })
})

describe ('POST Add Product Tegelas', async () => {
    let response = request(baseUrl)
    .post('/products')
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "category_id" : catIdminuman,
        "code": "MinumB001",
        "name": "Tegelas",
        "price": "4000",
        "cost": "2000",
        "stock": "30"
     })
    //assert
    it('Response status is equal to 201', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })
    it('Response name is to include: Tegelas', async() => {
        expect((await response).body.data.name).to.include("Tegelas")
    })
    it('Response name is to not include: Tekotak (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Tekotak")
    })
})


describe ('POST Add Product Tebotol', async () => {
    let response = request(baseUrl)
    .post('/products')
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "category_id" : catIdminuman,
        "code": "MinumB002",
        "name": "Tebotol",
        "price": "5000",
        "cost": "1000",
        "stock": "10"
     })
    //assert
    it('Response status is equal to 201', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })
    it('Response name is to include: Tebotol', async() => {
        expect((await response).body.data.name).to.include("Tebotol")
    })
    it('Response name is to not include: Tesachet (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("Tesachet")
    })
})
