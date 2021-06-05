const jsonWebToken = require('jsonwebtoken')

module.exports.signIn = (request, response, next) => {
    let userToken = request.header('userToken')
    jsonWebToken.verify(userToken, "userToken", async (error, decodedToken) => {
        if (error) {
            response.json({ error })
        } else {
            request.userID = decodedToken.userID
            next()
        }
    })
}


module.exports.crudOperations = (request, response, next) => {
    const {  userToken } = request.body
    jsonWebToken.verify(userToken, "userToken", async (error, decodedToken) => {
        if (error) {
            response.json({ error })
        } else {
            request.userID = decodedToken.userID
            next()
        }
    })
}
