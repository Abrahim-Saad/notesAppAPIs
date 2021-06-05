const userCollection = require('../models/userModel')
const { validationResult } = require('express-validator')
const bcrypt = require('bcrypt')
const jsonWebToken = require('jsonwebtoken')





module.exports.logIn = async (request, response) => {
    const { userEmail, userPassword } = request.body
    // console.log(emailForm);
    const userInputErrors = validationResult(request)
    if (userInputErrors.isEmpty()) {
        let userFound = await userCollection.findOne({ userEmail: userEmail })
        // console.log(userFound);
        if (userFound != null) {
            bcrypt.compare(userPassword, userFound.userPassword, function (error, passwordMatches) {
                if (error) {
                    console.log(error);
                }
                else if (passwordMatches) {
                    let userToken = jsonWebToken.sign({ userID: userFound._id}, 'userToken')
                    response.json({ message: 'Correct Credentials, User Loggedin!!',
                    userID: userFound._id, userToken })

                } else {
                    console.log('Wrong Password');
                    response.json({ message: 'Wrong Password!!' })


                }
            })

        } else {
            console.log("Email doesn't exist");
            response.json({ message: "Email doesn't exist!!" })

        }
    } else {
        console.log(userInputErrors.array());
        response.json({ Errors: userInputErrors.array() })

    }
    // console.log(userFound);

}