const {Mixed, Schema, model} = require('mongoose')

const tut = new Schema({
    currentStep: Number,
    numberOfSteps: Number
})

const user = new Schema({
    username: {
        required: true,
        type: String
    },
    pages: {
        type: Mixed
        // type: Map,
        // of: {
        //     type: Map,
        //     of: {
        //         tut
        //     }
        // },
    }
})

module.exports = model('User', user)