const noteCollection = require('../models/noteModel')


module.exports.addNote = async (request, response) => {
    try {
        const { noteTitle, noteContent } = request.body
        await noteCollection.insertMany(
            {
                noteTitle: noteTitle,
                noteContent: noteContent,
                userID: request.userID,
            });
        response.json({ message: "Note Added Successfully!!" })

    } catch (error) {
        response.json({ error })

    }


}


module.exports.deleteNote = async (request, response) => {
    try {
        const { noteIDtoDelete } = request.body
        await noteCollection.findByIdAndDelete({ _id: noteIDtoDelete });
        response.json({ message: "Note Deleted Successfully!!" })

    } catch (error) {
        response.json({ error })

    }
}







module.exports.editNote = async (request, response) => {

    try {
        const { noteIDtoEdit, noteTitleToEdit, noteContentToEdit } = request.body
        await noteCollection.findByIdAndUpdate({ _id: noteIDtoEdit },
            { noteTitle: noteTitleToEdit, noteContent: noteContentToEdit });

        response.json({ message: "Note Updated Successfully!!" })
        
    } catch (error) {
        response.json({ error })

    }


}