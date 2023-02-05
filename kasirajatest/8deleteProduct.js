const request = require('supertest')
const {expect} = require('chai')
const baseUrl = 'https://kasir-api.belajarqa.com'
const {token} = require('../data/token.js')
const {prdIdsugus, prdIdtegelas, prdIdtebotol } = require('../data/id.js')

console.log(token)
console.log(prdIdsugus)
console.log(prdIdtegelas)
console.log(prdIdtebotol)

describe ('DELETE Product Sugus', async () => {
    let response = request(baseUrl)
    .delete('/products/' + (prdIdsugus))
    .set({ "Authorization": "Bearer " + (token)})
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response is to include message: Product berhasil dihapus', async() => {
        expect((await response).body.message).to.include("Product berhasil dihapus")
    })
    it('Response is to not include message: Product gagal dihapus (negatif)', async() => {
        expect((await response).body.message).to.not.include("Product gagal dihapus")
    })
})


describe ('DELETE Product Tegelas', async () => {
    let response = request(baseUrl)
    .delete('/products/' + (prdIdtegelas))
    .set({ "Authorization": "Bearer " + (token)})
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response is to include message: Product berhasil dihapus', async() => {
        expect((await response).body.message).to.include("Product berhasil dihapus")
    })
    it('Response is to not include message: Product gagal dihapus (negatif)', async() => {
        expect((await response).body.message).to.not.include("Product gagal dihapus")
    })
})


describe ('DELETE Product Tebotol', async () => {
    let response = request(baseUrl)
    .delete('/products/' + (prdIdtebotol))
    .set({ "Authorization": "Bearer " + (token)})
    //assert
    it('Response status is equal to 200', async() => {
        console.log((await response).status)
        console.log((await response).body)
        expect((await response).status).to.equal(200)
    })
    it('Response is to include message: Product berhasil dihapus', async() => {
        expect((await response).body.message).to.include("Product berhasil dihapus")
    })
    it('Response is to not include message: Product gagal dihapus (negatif)', async() => {
        expect((await response).body.message).to.not.include("Product gagal dihapus")
    })
})
