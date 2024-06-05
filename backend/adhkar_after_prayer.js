const express=require('express');
var bodyParser=require('body-parser');
const cors=require('cors');
const app=express();
const {ObjectId} =require('mongodb');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));




app.get('/', async (req, res) => {
    try {
        const collection = req.database.collection("adhkar_after_prayer");

        const documents = await collection.find({}).toArray();
        res.status(200).json(documents);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error retrieving documents');
    }
});




app.post('/', async (req, res) => {
    try {
        const collection = req.database.collection("adhkar_after_prayer");
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



app.delete('/:id', async (req, res) => {
    try {
;
        const collection = req.database.collection("adhkar_after_prayer");

        const documentId = req.params.id;

        const result = await collection.deleteOne({ _id: new ObjectId(documentId) });

        if (result.deletedCount === 1) {
            res.status(200).send('Document successfully deleted');
        } else {
            res.status(404).send('Document not found');
        }
    } catch (error) {
        console.error('Error deleting document:', error);
        res.status(500).send('Error deleting document');
    }
});




  
app.get('/num', async (req, res) => {
    try {
        const collection = req.database.collection("adhkar_after_prayer");
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