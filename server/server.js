const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bodyParser = require('body-parser')
const path = require('path')
var cors = require('cors')
var ObjectId = require('mongoose').Types.ObjectId;

// const data = require('./data.json') // ** HOW I REQUIRED THE DATA
mongoose.connect("mongodb://localhost/clients", { useNewUrlParser: true })

// app.use(express.static(path.join(__dirname, 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(cors())


app.use(function (req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})


const clientsSchema = new Schema({

    name: String,
    email: String,
    firstContact: Date,
    emailType: String,
    sold: Boolean,
    owner: String,
    country: String
});

const Client = mongoose.model('client', clientsSchema)

// data.map(c => {// *METHOD USED TO SAVE DATA.JSON IN MONGOOSDB*
//     let client = new Client (c)
//     client.save()
// })

app.get('/clients', (req, res) => {
    Client.find({}).exec(function (err, data) {
        res.send(data)
    })
})

app.post('/actions', (req, res) => {
    const c1 = new Client(req.body)
    c1.save()
    res.end()
})

app.put('/actions/update/:email', (req, res) => {
    console.log(req.body)
    const Email = req.params.email
    const filter = { email: Email };
    const update = { owner: req.body.Owner };

    Client.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
    },
        function (error, result) {
            console.log(result);
        });

res.end()
})

app.put('/actions/Sold/:email',(req, res) => {
    console.log(req.body.emailType)
    const Email = req.params.email
    const filter = { email: Email };
    const update = {
        sold: true,
        emailType: req.body.emailType
    };
    Client.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
    },
        function (error, result) {
            console.log(result);
        });

res.end()
})
app.put('/actions/nameAndCountry/:email',(req, res) => {
    
    const Email = req.params.email
    const filter = { email: Email };
    const update = {
        name:`${req.body.name} ${req.body.surname}`,
        country: req.body.country
    };
    Client.findOneAndUpdate(filter, update, {
        new: true,
        upsert: true
    },
        function (error, result) {
            console.log(result);
        });
res.end()

})




let port = 8888
app.listen(port, function () {
    console.log(`you are on port ${port}`)
})

