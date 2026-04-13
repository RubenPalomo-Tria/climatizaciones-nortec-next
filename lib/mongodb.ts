import { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

function getMongoUri() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Falta la variable de entorno MONGODB_URI");
  }
  return uri;
}

function getMongoDbName() {
  const dbName = process.env.MONGODB_DB_NAME ?? process.env.MONGODB_DB;
  if (!dbName) {
    throw new Error("Falta la variable de entorno MONGODB_DB_NAME");
  }
  return dbName;
}

export function getMongoCollectionName() {
  const collectionName = process.env.MONGODB_COLLECTION_NAME ?? "Leads";
  if (!collectionName) {
    throw new Error("Falta la variable de entorno MONGODB_COLLECTION_NAME");
  }
  return collectionName;
}

function getMongoClientPromise() {
  const uri = getMongoUri();
  if (process.env.NODE_ENV === "development") {
    if (!global._mongoClientPromise) {
      const client = new MongoClient(uri);
      global._mongoClientPromise = client.connect();
    }
    return global._mongoClientPromise;
  }

  const client = new MongoClient(uri);
  return client.connect();
}

export async function getMongoDb() {
  const client = await getMongoClientPromise();
  return client.db(getMongoDbName());
}
