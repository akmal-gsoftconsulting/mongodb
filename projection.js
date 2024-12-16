const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    const database = await client.db("Mongodb_Queries");
    const Books =  await database.collection("Books");      
      

    // const result = await Books.find({}, { projection: { title: 1, price: 1 } }).toArray();

    // const result = await Books.find({}, { projection: { stock: 0, categories: 0 } }).toArray();


    // const result = await Books.find({}, { projection: { authors: { $slice: 1 } } }).toArray();


    const result = await Books.find({}, { projection: { authors: { $elemMatch: { country: "UK" } } } }).toArray();




      


    console.log("result " , result ) ;

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
