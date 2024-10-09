import { MongoClient, ServerApiVersion } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const uri = process.env.MONGODB_URL
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

const client = new MongoClient(uri as string, options)

export async function connectToMongoDB() {
  try {
    await client.connect()
    // Send a ping to confirm a successful connection
    await client.db('admin').command({ ping: 1 })
    console.log('Successfully connected to MongoDB!')
  } catch (error) {
    console.error('Error connecting to MongoDB:', error)
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close()
  }
}
