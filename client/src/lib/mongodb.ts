import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // En modo de desarrollo, usa una variable global para que el valor
  // se conserve entre recargas de módulos causadas por HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>
  }

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // En modo de producción, no es deseable usar una variable global.
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Exporta una promesa de MongoClient con ámbito de módulo. Al hacer esto en un
// módulo separado, el cliente puede ser compartido entre funciones.
export default clientPromise;