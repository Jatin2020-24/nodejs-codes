const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const database = 'ecomm';

const client = new MongoClient(url);


async function dbConnect()
{
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('products');
    // let response = await collection.find({}).toArray()
    // console.log(response);
}

//  dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.warn(data);
//     })
//  })

const main = async ()=>{
    console.log("main function called");
    let data = await dbConnect();
    data = data.find().toArray();
    console.warn(data);
}