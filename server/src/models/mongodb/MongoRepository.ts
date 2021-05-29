import mongoClient from './MongoConnection';
import config from '../../utils/Config';
import VerificationRequest from '../VerificationRequest';
import { Collection } from 'mongodb';


const getRequestsCollection = (): Collection => {
  return mongoClient.db(config.DB_NAME).collection("requests");
}

/**
 * Gets all verification requests from the DB and returns them.
 */
const getAllRequests = async (): Promise<VerificationRequest[]> => {
  return (await getRequestsCollection().find({}).toArray())
    .map((record) => new VerificationRequest(record._id, record.timestamp, record.ipfsUrl, record.fromAddress, record.toAddresses));
};

/**
 * Saves a `VerificationRequest` to the DB.
 */
const saveRequest = async (request: VerificationRequest): Promise<VerificationRequest> => {
  const query = { _id: request.id };
  const update = { $set: request };
  const options = { upsert: true };

  await getRequestsCollection().updateOne(query, update, options);

  return request;
};

/**
 * Deletes an `VerificationRequest` from the DB.
 */
const deleteRequest = async (requestId: string) => {
  await getRequestsCollection().deleteOne({ _id: requestId });
};


export default {
  getAllRequests,
  saveRequest,
  deleteRequest
}
