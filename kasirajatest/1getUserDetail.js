const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')
const {idUser} = require('../data/id.js')

console.log(token)
console.log(idUser)

describe ('GET User list', async () => {
    let response = request(baseUrl)
    .get('/users')
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

describe ('GET User Detail', async () => {
    let response = request(baseUrl)
    .get('/users/'+(idUser))
    .set({ 'Content-Type': 'application/json',
        "Authorization": "Bearer " + (token) 
    })
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response user role is to include: admin', async() => {
        expect((await response).body.data.user.role).to.include("admin")
    })
    it('Response user role is to not include: kasir (negatif)', async() => {
        expect((await response).body.data.user.role).to.not.include("kasir")
    })
})

