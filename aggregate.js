const { group } = require('console');
const { MongoClient } = require('mongodb');
const { title } = require('process');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


async function connectToDatabase() {
  try {
    
    await client.connect();
    console.log("Connected to MongoDB successfully!");
    const database = await client.db("Mongodb_Queries");
    const Books =  await database.collection("Books");      
      
    // const result = await Books.aggregate([
    //     { $project: { title: 1, price: 1, _id: 0 } }
    //   ]).toArray();


    // const result = await Books.aggregate([
    //     { $match: { price: { $gt: 30 } } }
    //   ]).toArray();


    // const result = await Books.aggregate([
    //     { $sort: { price: -1 } }
    //   ]).toArray();
      

    // const result = await Books.aggregate([
    //     { $skip: 2 },
    //     { $limit: 1 }
    //   ]).toArray();

    // const result = await Books.aggregate([
    //     { $unwind: "$categories" },
    //     { $project: { title: 1, categories: 1, _id: 0 } }
    //   ]).toArray();


    // const result = await Books.aggregate([
    //     { $unwind: "$categories" },
    //     { $group: { _id: "$categories", avgPrice: { $avg: "$price" } } }
    //   ]).toArray();
      
    // const result = await Books.aggregate([
    //     { $count: "totalBooks" }
    //   ]).toArray();


    //   const result = await Books.aggregate([
    //     { $addFields: { discountedPrice: { $multiply: ["$price", 0.9] } } },
    //     { $project: { title: 1, price: 1, discountedPrice: 1 } }
    //   ]).toArray();
      


    // const result = await Books.aggregate([
    //     {
    //       $lookup: {
    //         from: "Reviews",
    //         localField: "_id",
    //         foreignField: "bookId",
    //         as: "reviews"
    //       }
    //     },
    //     { $project: { title: 1, reviews: 1 } }
    //   ]).toArray();



    // const result = await Books.aggregate([
    //     {
    //       $facet: {
    //         totalBooks: [{ $count: "count" }], // Count total books
    //         expensiveBooks: [
    //           { $match: { price: { $gte: 30 } } }, // Filter books with price >= 50
    //           { $project: { title: 1, _id: 0 } } // Only include the title field
    //         ]
    //       }
    //     }
    //   ]).toArray();
    
      
      /* replaceRoot */

    // const result = await Books.aggregate([
    //     { $replaceRoot: { newRoot: "$publisher" } }
    //   ]).toArray();


    /* unwind */

    // const result = await Books.aggregate([
    //     { $unwind: "$categories" },
    //     { $group: { _id: "$categories", totalBooks: { $count: {} } } }
    //   ]).toArray();



    /*bucket */

    // const result = await Books.aggregate([
    //     {
    //       $bucket: {
    //         groupBy: "$price",
    //         boundaries: [0, 10, 20],
    //         default: "Other",
    //         output: {
    //           count: { $sum: 1 }
    //         }
    //       }
    //     }
    //   ]).toArray();




    /*map */

    // const result = await Books.aggregate([
    //   {
    //     $project: {
    //       title: 1,
    //       authors: {
    //         $map: {
    //           input: "$authors",
    //           as: "author",
    //           in: { name: { $toUpper: "$$author.name" }, country: "$$author.country" }
    //         }
    //       }
    //     }
    //   }
    // ]).toArray();
    



    /*filter */
    
    // const result = await Books.aggregate([
    //   {
    //     $project: {
    //       title: 1,
    //       authors: {
    //         $filter: {
    //           input: "$authors",
    //           as: "author",
    //           cond: { $eq: ["$$author.country", "UK"] }
    //         }
    //       }
    //     }
    //   }
    // ]).toArray();
    



    /*switch */

    // const result = await Books.aggregate([
    //   {
    //     $project: {
    //       title: 1,
    //       price: 1,
    //       priceCategory: {
    //         $switch: {
    //           branches: [
    //             { case: { $lt: ["$price", 40] }, then: "Budget" },
    //             { case: { $and: [{ $gte: ["$price", 40] }, { $lt: ["$price", 70] }] }, then: "Mid-range" },
    //             { case: { $gte: ["$price", 80] }, then: "Premium" }
    //           ],
    //           default: "Unknown"
    //         }
    //       }
    //     }
    //   }
    // ]).toArray();


    /*   if else */


    // const result = await Books.aggregate([
    //   {
    //     $project: {
    //       title: 1,
    //       price: 1,
    //       onSale: {
    //         $cond: {
    //           if: { $lt: ["$price", 50] },
    //           then: true,
    //           else: false
    //         }
    //       }
    //     }
    //   }
    // ]).toArray();
    
    
    // const result = await Books.find({
    //   $expr: { $gt: ["$price", "$stock"] }
    // }).toArray();
    



    // const result = await Books.aggregate(
    //   [
    //     $match: {$price : {$gt : 50}} 
    //   ]
    // ).toArray();



    // const result = await Books.aggregate([
    //   { $match: { price: { $gt: 30 } } },
    //   { $unwind : "$authors"  },
    //   { $group : {_id : "$authors.country"  ,  AvgPrice : {$avg : "$price" } }},
    //   {$sort : { AvgPrice : -1 }}
    // ]).toArray();



    const result = await Books.aggregate([
      {
        $addFields: {
          discount: {
            $cond: {
              if: { $gte: ["$stock", 80] },
              then: 0.1,
              else: 0.05
            }
          }
        }
      },
      {
        $merge: {
          into: "BooksWithDiscount",
          whenMatched: "merge",
          whenNotMatched: "insert"
        }
      }
    ]).toArray();
    



    
  

    // console.log(JSON.stringify(result, null, 2));
    console.log("result " , result ) ;

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
