const express = require('express');
const mongodb = require('mongodb')
const dbConnect = require('./config')
const app = express();

app.use(express.json());


app.get('/', async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    resp.send(data);
});


app.post('/', async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result);
})

app.put('/', async (req, resp) => {
    console.log(resp.body);
    const data = await dbConnect();
    const result = await data.updateOne(
        { name: "iphone" },
        { $set: req.body }
    )
    resp.send({ status: "update" })
})

app.delete("/:id", async (req, resp) => {
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
    resp.send(result)
})


app.listen(5000)