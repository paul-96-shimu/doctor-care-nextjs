import { MongoClient, ServerApiVersion } from "mongodb";

let client;
let clientPromise;

const uri = process.env.MONGODB_URI;
client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

clientPromise = client.connect()

export default async function dbConnect(collectionName) {
    const client = await clientPromise;
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
