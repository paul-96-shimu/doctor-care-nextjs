// import { MongoClient, ServerApiVersion } from "mongodb";

// let client;
// let clientPromise;

// const uri = process.env.MONGODB_URI;
// client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// })

// clientPromise = client.connect()

// export default async function dbConnect(collectionName) {
//     const client = await clientPromise;
//     return client.db(process.env.DB_NAME).collection(collectionName)
// }



import { MongoClient, ServerApiVersion } from "mongodb";


 export const collectionNamesObj = {
    servicesCollection: 'services',
    userCollection: "user"
};
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

