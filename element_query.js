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
    //     price: { $exists: true },
    //     stock: { $exists: false }
    //   }).toArray();


    // const result = await Books.find({
    //     price: { $type: "double" }
    //   }).toArray();

    // const result = await Books.find({
    //     title: { $type: "string" },
    //     stock: { $type: "int" }
    //   }).toArray();


    // const result = await Books.find({
    //     categories: { $all: ["Programming", "JavaScript"] }
    //   }).toArray();


    // const result = await Books.find({
    //     authors: { $elemMatch: { country: "UK", name: { $regex: /^David/ } } }
    //   }).toArray();


    
    // const result = await Books.find({
    //     $expr: { $gt: [{ $size: "$authors" }, 2] }
    //   }).toArray();
      
      
      
      
    // const result = await Books.find({
    //     categories: { $all: ["Programming"], $size: 2 }
    //   }).toArray();
      

    // const result = await Books.find({
    //     authors: { $elemMatch: { $or: [{ country: "USA" }, { country: "UK" }] } }
    //   }).toArray();
      

    //   const result = await Books.find({
    //     authors: { $elemMatch: { country: "USA" } },
    //     categories: { $size: 2 }
    //   }).toArray();


   
      
      
      


    console.log("result " , result ) ;

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
