const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')

console.log(token)

describe ('POST Add Category Permen', async () => {
    let response = request(baseUrl)
    .post('/categories')
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "name": "permen",
        "description": "permen kemasan 1000"
     })
    //assert
    it('Response status is equal to 201', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })
    it('Response name is to include: permen', async() => {
        expect((await response).body.data.name).to.include("permen")
    })
    it('Response name is to not include: sembako (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("sembako")
    })
})

describe ('POST Add Category Minuman', async () => {
    let response = request(baseUrl)
    .post('/categories')
    .set({ "Authorization": "Bearer " + (token)})
    .send({
        "name": "minuman",
        "description": "minuman kemasan kecil"
     })
    //assert
    it('Response status is equal to 201', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(201)
    })
    it('Response name is to include: minuman', async() => {
        expect((await response).body.data.name).to.include("minuman")
    })
    it('Response name is to not include: indomie (negatif)', async() => {
        expect((await response).body.data.name).to.not.include("indomie")
    })
})
