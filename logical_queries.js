const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    

    await client.connect();
    console.log("Connected to MongoDB successfully!");
    const database = await client.db("Mongodb_Queries");
    const Books =  await database.collection("Books");


    // const result = await Books.find({
    //     $and: [
    //       { price: { $gt: 30 } },
    //       { $or: [
    //           { "publisher.name": "Addison-Wesley" },
    //           { stock: { $lte: 50 } }
    //         ]
    //       }
    //     ]
    //   }).toArray();


    // const result = await Books.find({
    //     $nor: [
    //       { "publisher.location": "UK" },
    //       { price: { $gt: 40 } }
    //     ]
    //   }).toArray();


    // const result = await Books.find({
    //     title: { $not: { $regex: /Pragmatic/i } }
    //   }).toArray();


    // const result = await Books.find({
    //     $and: [
    //       { price: { $gt: 50 } },
    //       { $nor: [
    //           { categories: "Programming" },
    //           { "publisher.name": "Addison-Wesley" }
    //         ]
    //       }
    //     ]
    //   }).toArray();



    // const result = await Books.find({
    //     $and: [
    //       {
    //         $or: [
    //           { price: { $lt: 50 } },
    //           { "publisher.location": "USA" }
    //         ]
    //       },
    //       { title: { $not: { $regex: /^The/i } } }
    //     ]
    //   }).toArray();
      
      
      
      
      




    console.log("result " , result ) ;

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
