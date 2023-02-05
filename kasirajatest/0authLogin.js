const request = require('supertest')
const baseUrl = 'https://kasir-api.belajarqa.com'

describe ('POST Authorization - Login', async () => {
    let response = request(baseUrl)
    .post('/authentications')
    .send({
        "email": "emailaja@yopmail.com",
        "password": "12345"  
    })
    console.log((await response).status)
    console.log((await response).body)
    // console.log('accessToken:')
    console.log('accessToken: ' +(await response).body.data.accessToken)
})
