const mongoose = require('mongoose');

const usertSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    // add Authintication for all of these:
    college: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    IDNumber: { type: String, required: true }
    // Add other fields as needed
});

const User = mongoose.model('User', usertSchema);

module.exports = User;


