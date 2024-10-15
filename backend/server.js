let mongoose = require('mongoose');
let express = require('express');
let cors = require('cors');
let Feedback = require('./schema');
let bodyParser = require('body-parser');
let uri = "mongodb://127.0.0.1:27017/bookfair"
let app = express();
let port = 7000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.post('/addfeedback', async (req, res) => {
    let {username, note} = req.body
    try {
        let feedback = new Feedback({username, note});
        await feedback.save();
        res.send(feedback);
    } catch (error) {
        console.log(error);
    }
    
})

mongoose.connect(uri).then(() => {
    console.log('connected to db');
    app.listen(port, () => {
        console.log(`server started on ${port}`);
    })
}).catch((err) => {
    console.log('unable to connect to database', err);
})