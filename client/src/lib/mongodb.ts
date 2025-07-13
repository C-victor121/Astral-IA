import { MongoClient } from 'mongodb';

// Durante el build, MONGODB_URI puede no estar disponible
if (!process.env.MONGODB_URI && process.env.NODE_ENV !== 'development') {
  console.warn('MONGODB_URI not found, using fallback for build process');
}

const uri = process.env.MONGODB_URI || 'mongodb://astral_user:astral_password@mongodb:27017/astral_db';
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // En modo de desarrollo, usa una variable global para que el valor
  // se conserve entre recargas de módulos causadas por HMR (Hot Module Replacement).
  const globalWithMongo = global as typeof globalThis & {
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