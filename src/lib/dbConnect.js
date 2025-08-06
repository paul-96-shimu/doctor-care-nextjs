import { MongoClient, ServerApiVersion } from "mongodb";

 export default function dbConnect(collectionName) {
    



    const uri = process.env.MONGODB_URI;
    // Create a MongoClient with a MongoClientOptions object to set the Stable API version
    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });
    return client.db(process.env.DB_NAME).collection(collectionName)
}

// import { MongoClient, ServerApiVersion } from "mongodb";

// const uri = process.env.MONGODB_URI;
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// export default async function dbConnect(collectionName) {
//   try {
//     await client.connect(); // Ensure client is connected
//     const db = client.db(process.env.DB_NAME); // Use your DB name from env
//     const collection = db.collection(collectionName);
//     return collection;
//   } catch (error) {
//     console.error("Database connection failed:", error);
//     throw error;
//   }
// }
