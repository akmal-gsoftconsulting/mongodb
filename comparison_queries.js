
const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    

    await client.connect();
    console.log("Connected to MongoDB successfully!");
    const database = await client.db("Mongodb_Queries");
    const Books =  await database.collection("Books");
    
    // const result =await Books.find( {price : { $gt :  40}  } ).toArray() ; 
    // const result =await Books.find( {price : { $lt :  40}  } ).toArray() ; 

    // const result =await Books.find( {stock : { $lte :  30}  } ).toArray() ; 
    // const result =await Books.find( {stock : { $gte :  50}  } ).toArray() ; 

    // const result =await Books.find( { "publisher.location": "USA" } ).toArray() ; 
    // const result =await Books.find( { "authors.country": "UK" }).toArray() ; 
    // const result =await Books.find( { categories: "Programming" } ).toArray() ;

    // const result =await Books.find( { categories: { $ne: "Programming" } } ).toArray() ; 
    // const result =await Books.find( { categories: { $eq: "JavaScript" } } ).toArray() ; 




    

    // ===================  Intermediate ============================



    // Find books priced between $30 and $50
    // const result = await Books.find({ price: { $gte: 30, $lte: 50 } }).toArray();

    // Find books with stock greater than 100 but less than 200
    // const result = await Books.find({ stock: { $gt: 100, $lt: 200 } }).toArray();

    // Find books that are in the "Programming" category but not in the "Software Development" category
    // const result = await Books.find({ categories: "Programming", categories: { $ne: "Software Development" } }).toArray();

    // Find books where at least one author is from the USA
    // const result = await Books.find({ "authors.country": "USA" }).toArray();

    // Find books published by "Addison-Wesley" but not located in the USA
    // const result = await Books.find({ "publisher.name": "Addison-Wesley", "publisher.location": { $ne: "USA" } }).toArray();

    // Find books with a price less than $50 and stock greater than 50
    // const result = await Books.find({ price: { $lt: 50 }, stock: { $gt: 50 } }).toArray();

    // Find books where the first author is from the USA
    // const result = await Books.find({ "authors.0.country": "UK" }).toArray();

    // Find books with exactly 2 categories
    // const result = await Books.find({ categories: { $size: 2  } }).toArray();

    // Find books where the title contains the word "Pragmatic" (case-insensitive)
    // const result = await Books.find({ title: { $regex: /Pragmatic/i } }).toArray();

    // Find books with a price greater than $30 but not divisible by 10
    // const result = await Books.find({ price: { $gt: 30, $not : { $mod: [10, 0]}  } }).toArray();


    


    // ===================  Advance ============================


    // Find books with prices in the range of $20, $30, or $40
    // const result = await Books.find({ price: { $in: [20, 30, 40] } }).toArray();

    // Find books with prices NOT in the range of $20, $30, or $40
    // const result = await Books.find({ price: { $nin: [20, 30, 40] } }).toArray();

    // Find books where the stock is either less than 50 or greater than 150
    // const result = await Books.find({ $or: [ { stock: { $lt: 50 } }, { stock: { $gt: 150 } } ] }).toArray();

    // Find books where the publisher is "Addison-Wesley" and is located in "USA" but exclude books with a price less than $30
    // const result = await Books.find({ 
    //     "publisher.name": "Addison-Wesley", 
    //     "publisher.location": "USA", 
    //     price: { $gte: 30 } 
    // }).toArray();

    // Find books with authors from either "USA" or "UK"
    // const result = await Books.find({ "authors.country": { $in: ["USA", "UK"] } }).toArray();

    // Find books where at least one category is not "Programming" or "Software Development"
    // const result = await Books.find({ categories: { $nin: ["Programming", "Software Development"] } }).toArray();

    // Find books where the title starts with "The" (case-insensitive)
    // const result = await Books.find({ title: { $regex: /^The/i } }).toArray();

    

    // // Find books with price as a multiple of 5
    
    // const result = await Books.find({ price: { $mod: [5, 0] } }).toArray();


    // // Find books where stock is between 50 and 200 but excludes specific prices (e.g., 39.99 and 42.99)
    // const result = await Books.find({ 
    //     stock: { $gte: 50, $lte: 200 }, 
    //     price: { $nin: [39.99, 42.99] } 
    // }).toArray();

    // // Find books where the categories array contains both "Programming" and "Software Development"
    // const result = await Books.find({ categories: { $all: ["Programming", "Software Development"] } }).toArray();

    // // Find books with exactly 2 authors where one author is from the "UK"
    // const result = await Books.find({ 
    //     authors: { $size: 2 }, 
    //     "authors.country": "UK" 
    // }).toArray();

    // // Find books with nested field conditions (e.g., publisher is located in "USA" and has a specific name)
    // const result = await Books.find({ 
    //     "publisher.name": "Addison-Wesley", 
    //     "publisher.location": { $eq: "USA" } 
    // }).toArray();

    // // Find books where the price field exists and is greater than $10
    // const result = await Books.find({ 
    //     price: { $exists: true, $gt: 10 } 
    // }).toArray();


    console.log("result " , result ) ;

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
