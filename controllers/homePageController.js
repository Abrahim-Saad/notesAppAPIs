const noteCollection = require('../models/noteModel')

module.exports.homePage = async (request, response) => {
    try {
        let pageNumber = request.query.page
        if (pageNumber == undefined || pageNumber <= 0) {
            pageNumber = 1
        }
        let numberOfNotes = 5
        let numberOfSkippedNotes = [pageNumber - 1] * numberOfNotes
        let userNotes = await noteCollection.find({ userID: request.userID }).skip(numberOfSkippedNotes).limit(numberOfNotes);

        response.json({ pageNumber, userNotes })

    } catch (error) {
        response.json({ error })
    }


}
