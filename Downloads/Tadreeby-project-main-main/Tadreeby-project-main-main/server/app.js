////////////////////////////////////////// imports: //////////////////////////////////////////
const express = require('express');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 5173;
const app = express();
const mongoose = require('mongoose');

////////////////////////////////////////// collections: //////////////////////////////////////////
const User = require('./models/user');
const Training = require('./models/training');

////////////////////////////////////////// mongoose database connection: //////////////////////////////////////////
mongoose.connect('mongodb://127.0.0.1:27017/TadreebyDB')
    .then(() => {
        console.log('MONGO CONNECTION OPEN')
    })
    .catch(err => {
        console.log('MONGO CONNECTION ERROR!!!!')
        console.log(err)
    })

////////////////////////////////////////// global functions and middleware: //////////////////////////////////////////
app.use(cors());
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '..', 'Tadreeby-project-main/dist', 'index.html')));
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, req.body);
    next();
});


////////////////////////////////////////// FUNCTIONS //////////////////////////////////////////

app.get('/', (req, res) => {

})

app.get('/TrainingOpenPage', async (req, res) => {
    try {
        const trainingData = await Training.find({}); // Fetch all training data
        res.status(200).json(trainingData);
    } catch (error) {
        console.error("Error fetching training data:", error);
        res.status(500).send("Error fetching training data");
    }
});

// app.get('/HomeTrainings', async (req, res) => {
//     try {
//         const ids = req.query.ids.split(',');
//         const trainingData = await Training.find({
//             '_id': { $in: ids }
//         });
//         res.status(200).json(trainingData);
//     } catch (error) {
//         console.error("Error fetching training data:", error);
//         res.status(500).send("Error fetching training data");
//     }
// });

app.get('/TrainingOpenPage/:trainingId', async (req, res) => {
    try {
        const trainingData = await Training.findById(req.params.trainingId);
        res.status(200).json(trainingData);
    } catch (error) {
        console.error("Error fetching training data:", error);
        res.status(500).send("Error fetching training data");
    }
});


// POST endpoint to add data to the Training collection
app.post('/training', async (req, res) => {
    try {
        const training = new Training(req.body); // Create a new Training document from the request body
        await training.save(); // Save the Training document to the database
        console.log(training);
        res.status(201).json(training); // Send the saved document back in the response
    } catch (error) {
        console.error("Error saving training data:", error.message);
        res.status(400).send(error.message); // Send a 400 Bad Request response if an error occurs
    }
});

app.post('/SignInStudentPage', async (req, res) => {
    // console.log(req.body); // This should log the incoming request body
    try {
        const user = new User(req.body);
        await user.save();
        console.log(user);
        res.status(201).send(user);
    } catch (error) {
        console.error("Error saving user:", error.message); // Provides more detailed error
        res.status(400).send(error);
    }

});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'Tadreeby-project-main/dist', 'index.html'));
});

// start the Express server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});


//////////////////////////////////// add a render line to the undifined page 