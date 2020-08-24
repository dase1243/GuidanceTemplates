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
        pages: [{
            path: String,
            firstTimeVisit: Boolean,
            tutorials: {
                label: String,
                currentStep: Number,
                numberOfSteps: Number,
                labels: Array,
                descriptions: Array
            }
        }]
    }
)

module.exports = model('User', user)