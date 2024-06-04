const express=require('express');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




app.get('/', async (req, res) => {
    try {
        const collection = req.database.collection("evining");

        const documents = await collection.find({}).toArray();
        res.status(200).json(documents);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving documents');
    }
});




app.post('/', async (req, res) => {
    try {
        const collection = req.database.collection("evining");
        const doc = req.body;
        const result = await collection.insertOne(doc);

        // Retrieve the inserted document
        const insertedDoc = await collection.findOne({ _id: result.insertedId });

        // Send back the inserted document as the response
        res.status(200).json([insertedDoc]);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});


  
app.get('/num', async (req, res) => {
    try {
        const collection = req.database.collection("evining");
        // Retrieve the inserted document
        const doctors = await collection.find( { _id: { $exists: true } } ).count()


        // Send back the inserted document as the response
        res.status(200).json(doctors);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error inserting document');
    }
});
module.exports= app;