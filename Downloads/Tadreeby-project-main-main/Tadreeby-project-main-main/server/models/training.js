const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({
    trainingName: { type: String, required: true },
    description: { type: String, required: true },
    imageOne: { type: String, required: true },
    entityName: { type: String, required: true },
    massage: { type: String, required: true },
    period: { type: String, required: true }
    // Add other fields as needed
});

const Training = mongoose.model('Training', trainingSchema);

module.exports = Training;