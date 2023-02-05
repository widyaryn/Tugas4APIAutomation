const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')
const {catIdminuman, catIdpermen} = require('../data/id.js')

console.log(token)
console.log(catIdminuman)
console.log(catIdpermen)

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
})

describe ('GET Category Detail Permen', async () => {
    let response = request(baseUrl)
    .get('/categories/'+(catIdpermen))
    .set({ 'Content-Type': 'application/json',
        "Authorization": "Bearer " + (token) 
    })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response name is to include: permen', async() => {
        expect((await response).body.data.category.name).to.include("permen")
    })
    it('Response name is to not include: ciki (negatif)', async() => {
        expect((await response).body.data.category.name).to.not.include("ciki")
    })
})

describe ('GET Category Detail Minuman', async () => {
    let response = request(baseUrl)
    .get('/categories/'+(catIdminuman))
    .set({ 'Content-Type': 'application/json',
        "Authorization": "Bearer " + (token) 
    })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response name is to include: minuman', async() => {
        expect((await response).body.data.category.name).to.include("minuman")
    })
    it('Response name is to not include: makanan (negatif)', async() => {
        expect((await response).body.data.category.name).to.not.include("makanan")
    })
})

