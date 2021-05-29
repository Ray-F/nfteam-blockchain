import { MongoClient } from 'mongodb';
import Config from '../../utils/Config';

const client = new MongoClient(Config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    throw new Error(err.message)
  } else {
    console.log("SERVER_LOG: Mongodb Connected")
  }
});

export default client;
