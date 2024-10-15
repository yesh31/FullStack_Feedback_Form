let mongoose = require('mongoose');
let schema = mongoose.Schema;
let feedbackSchema = new schema({
    username: String,
    note: String
})

let Feedback = mongoose.model("feedback",feedbackSchema);
module.exports = Feedback;