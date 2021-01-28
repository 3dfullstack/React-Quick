
import axios from "axios";
import qs from "qs";
import MongoClient from "mongodb" 

const result = "";
const url = ``;
const dbName = 'codedb';
const fetchUrl = "https://reqres.in/api/users"

MongoClient.connect(url, async function(err, client) {
    let result = await axios.get(fetchUrl)
    result = await result.data;
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.insertOne({
        userid : "254414",
        data : result
    }, (err, res) => {
        console.log(res.result.n)
        client.close();
    })
});

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.insertMany([
        {
            userid : "7217554"
        },
        {
            dbid : "f,imw04f9op w4f9s,mfep,f"
        }
    ], (err, res) => {
        console.log(res.result.n)
        client.close();
    })
});

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.find(
        {
            userid : "7217554"
        })
    .toArray((err, res) => {
        console.log(res)
        client.close();
    })
});

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.updateOne(
        {
            userid : "7217554"
        }, 
        {
            $set : {
                loginid : "rf43w3fwf"
            }
        }, (err, res) => {
        console.log(res.result.n)
        client.close();
    })
});

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.updateMany(
        {
            userid : "7217554"
        }, 
        {
            $set : {
                loginid : "rf43w3fwf"
            }
        }, (err, res) => {
        console.log(res.result.n)
        client.close();
    })
});

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.deleteOne({
        userid : "254414"
    }, (err, res) => {
        console.log(res.result.n)
        client.close();
    })
});

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.deleteMany({
        userid : "254414"
    }, (err, res) => {
        console.log(res.result.n)
        client.close();
    })
});

MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('sampleDocs');
    collection.deleteMany({
        userid : "7217554"
    }, (err, res) => {
        console.log(res.result.n)
        client.close();
    })
});
