// const { group } = require('console');
const { MongoClient } = require('mongodb');
// const { title } = require('process');
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);


async function connectToDatabase() {
  try {
    
    
    await client.connect();
    
    const database = await client.db("test");
    const orders =  await database.collection("orders");      


    // const result = await orders.aggregate([
    //     // Stage 1: Unwind the items array to process each product individually
    //     { $unwind: "$items" },
        
    //     // Stage 2: Lookup to join with products collection to get product details
    //     { 
    //       $lookup: {
    //         from: "products",
    //         localField: "items.product_id",
    //         foreignField: "_id",
    //         as: "product_details"
    //       }
    //     },
        
    //     // // Stage 3: Unwind the product_details array
    //     { $unwind: "$product_details" },
        
    //     // // Stage 4: Add a field for the total price per product based on quantity
    //     { 
    //       $addFields: {
    //         total_price_per_product: {
    //           $multiply: ["$items.quantity", "$product_details.price"]
    //         }
    //       }
    //     },
        
    //     // // Stage 5: Add a field for the product category
    //     { 
    //       $addFields: {
    //         product_category: "$product_details.category"
    //       }
    //     },
        
    //     // // Stage 6: Group by product_id and calculate total quantity sold and total revenue
    //     { 
    //       $group: {
    //         _id: "$items.product_id",
    //         total_quantity_sold: { $sum: "$items.quantity" },
    //         total_revenue: { $sum: "$total_price_per_product" },
    //         product_category: { $first: "$product_category" },
    //         product_name: { $first: "$product_details.name" },
    //         product_price: { $first: "$product_details.price" },
    //         orders: { $push: "$$ROOT" }
    //       }
    //     },
        
    //     // // Stage 7: Sort by total quantity sold in descending order
    //     { $sort: { total_quantity_sold: -1 } },
        
    //     // // Stage 8: Limit to top 5 best-selling products
    //     { $limit: 5 },
        
    //     // // Stage 9: Lookup to join with the customers collection to get customer location
    //     { 
    //       $lookup: {
    //         from: "customers",
    //         localField: "orders.customer_id",
    //         foreignField: "_id",
    //         as: "customer_details"
    //       }
    //     },
        
    //     // // Stage 10: Unwind the customer_details array
    //     { $unwind: "$customer_details" },
        
    //     // // Stage 11: Add a field for customer location
    //     { 
    //       $addFields: {
    //         customer_location: "$customer_details.location"
    //       }
    //     },
        
    //     // // Stage 12: Group by product_id and customer_location to get quantity sold per location
    //     { 
    //       $group: {
    //         _id: { product_id: "$_id", location: "$customer_location" },
    //         total_quantity_sold: { $sum: "$total_quantity_sold" },
    //         total_revenue: { $sum: "$total_revenue" },
    //         product_name: { $first: "$product_name" },
    //         product_category: { $first: "$product_category" },
    //         product_price: { $first: "$product_price" },
    //         orders: { $push: "$orders" }
    //       }
    //     },
        
    //     // // Stage 13: Group by product_id to calculate total sales per product by location
    //     { 
    //       $group: {
    //         _id: "$_id.product_id",
    //         product_name: { $first: "$product_name" },
    //         product_category: { $first: "$product_category" },
    //         total_sales_per_product: { $sum: "$total_revenue" },
    //         total_quantity_sold: { $sum: "$total_quantity_sold" },
    //         locations: { $push: { location: "$_id.location", total_quantity_sold: "$total_quantity_sold" } }
    //       }
    //     },
        
    //     // // Stage 14: Add a field for total revenue per product
    //     { 
    //       $addFields: {
    //         product_total_revenue: "$total_sales_per_product"
    //       }
    //     },
        
    //     // // Stage 15: Sort by total sales per product in descending order
    //     { $sort: { product_total_revenue: -1 } },
        
    //     // // Stage 16: Lookup to get total stock for each product from the products collection
    //     { 
    //       $lookup: {
    //         from: "products",
    //         localField: "_id",
    //         foreignField: "_id",
    //         as: "product_stock"
    //       }
    //     },
        
    //     // // Stage 17: Unwind the product_stock array to get stock data
    //     { $unwind: "$product_stock" },
        
    //     // // Stage 18: Add a field for stock-to-sales ratio (stock available vs quantity sold)
    //     { 
    //       $addFields: {
    //         stock_to_sales_ratio: {
    //           $divide: ["$product_stock.stock", "$total_quantity_sold"]
    //         }
    //       }
    //     },
        
    //     // // Stage 19: Project the final output, showing relevant fields
    //     { 
    //       $project: {
    //         _id: 0,
    //         product_name: 1,
    //         product_category: 1,
    //         total_quantity_sold: 1,
    //         product_total_revenue: 1,
    //         locations: 1,
    //         stock_to_sales_ratio: 1
    //       }
    //     },
        
    //     // // Stage 20: Sort the results by product revenue and stock-to-sales ratio (highest revenue first, then best ratio)
    //     { 
    //       $sort: {
    //         product_total_revenue: -1,
    //         stock_to_sales_ratio: -1
    //       }
    //     }
    //   ]).toArray();

    console.log("Connected to MongoDB successfully!");

      // const result = await orders.aggregate([
      //   // Stage 1: Unwind the items array
      //   { $unwind: "$items" },
      
      //   // Stage 2: Lookup product details
      //   { 
      //     $lookup: {
      //       from: "products",
      //       localField: "items.product_id",
      //       foreignField: "_id",
      //       as: "product_details"
      //     }
      //   },
      
      //   // Stage 3: Unwind product details
      //   { $unwind: "$product_details" },
      
      //   // Stage 4: Add total price per product
      //   { 
      //     $addFields: {
      //       total_price_per_product: {
      //         $multiply: ["$items.quantity", "$product_details.price"]
      //       }
      //     }
      //   },
      
      //   // Stage 5: Group by customer_id to get total spent by each customer
      //   { 
      //     $group: {
      //       _id: "$customer_id",
      //       total_spent: { $sum: "$total_price_per_product" },
      //       products_purchased: { $push: "$product_details.name" }
      //     }
      //   },
      
      //   // Stage 6: Lookup customer details (e.g., name, location)
      //   { 
      //     $lookup: {
      //       from: "customers",
      //       localField: "_id",
      //       foreignField: "_id",
      //       as: "customer_details"
      //     }
      //   },
      
      //   // Stage 7: Unwind customer details
      //   { $unwind: "$customer_details" },
      
      //   // Stage 8: Add customer name and location
      //   { 
      //     $addFields: {
      //       customer_name: "$customer_details.name",
      //       customer_location: "$customer_details.location"
      //     }
      //   },
      
      //   // Stage 9: Project final output with relevant fields
      //   { 
      //     $project: {
      //       _id: 0,
      //       customer_name: 1,
      //       customer_location: 1,
      //       total_spent: 1,
      //       products_purchased: 1
      //     }
      //   },
      
      //   // Stage 10: Sort by total spent in descending order
      //   { $sort: { total_spent: -1 } },
      
      //   // Stage 11: Limit to top 5 customers
      //   { $limit: 5 }
      // ]).toArray();
      

    const result = await orders.aggregate(
      [
        { $unwind: "$items" },
        { $lookup: { from: "products", localField: "items.product_id", foreignField: "_id", as: "product_details" } },
        { $unwind: "$product_details" },
        { $lookup: { from: "customers", localField: "customer_id", foreignField: "_id", as: "customer_details" } },
        { $unwind: "$customer_details" },
        { $match: { "product_details.name": { $regex: "phone", $options: "i" } } },
        { $group: { _id: "$customer_details.name", total_spent: { $sum: { $multiply: ["$items.quantity", "$product_details.price"] } } } },
        { $sort: { total_spent: -1 } },
      ]
    ).toArray();

    // console.log(JSON.stringify(result, null, 2));
    console.log("result " , result ) ;

  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  } finally {
    await client.close();
  }
}

connectToDatabase();
