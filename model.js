const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    last_name:
    {
        required: true,
        type: String
    },
    first_name:
    {
        required: true,
        type: String
    },
    hometown:
    {
        required: true,
        type: String
    },
    class:
    {
        required: true,
        type: String
    },
    p_time:
    {
        required: true,
        type: Number
    },
    f_time:
    {
        required: true,
        type: Number
    },
    imp:
    {
        required: true,
        type: String
    },
    event:
    {
        required: true,
        type: String
    },
})

module.exports = mongoose.model('players', dataSchema)