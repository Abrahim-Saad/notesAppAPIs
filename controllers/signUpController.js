const userCollection = require('../models/userModel')
const bcrypt = require('bcrypt')
const { validationResult } = require('express-validator')


module.exports.addNewAccount = async (request, response) => {
    const { userName, userEmail, userPassword } = request.body;
    const userInputErrors = validationResult(request)
    let usedEmail = await userCollection.findOne({ userEmail: userEmail })
    // console.log(usedEmail);
    if (usedEmail == null) {
        if (userInputErrors.isEmpty()) {
            bcrypt.hash(userPassword, 5, async function (err, hashedPassword) {
                // Store hash in your password DB.
                await userCollection.insertMany(
                    {
                        userName: userName,
                        userEmail: userEmail,
                        userPassword: hashedPassword
                    });
                response.json({message: "Account Created Succefully!!"})

            });

        }
        else {
            // console.log(userInputErrors.array());
            response.json({Errors: userInputErrors.array()})

        }
        

    }
    else {
        // console.log("Email already Exists!!");
        response.json({message: "Email already Exists!!"})

    }

}