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
const getAllApprovals = async (): Promise<VerificationRequest[]> => {
  return (await getRequestsCollection().find({}).toArray())
    .map((record) => new VerificationRequest(record._id, record.timestamp, record.ipfsUrl, record.fromAddress, record.toAddresses));
};

/**
 * Saves a `VerificationRequest` to the DB.
 */
const saveApproval = async (approval: VerificationRequest): Promise<VerificationRequest> => {
  const query = { _id: approval.id };
  const update = { $set: approval };
  const options = { upsert: true };

  await getRequestsCollection().updateOne(query, update, options);

  return approval;
};

/**
 * Deletes an `VerificationRequest` from the DB.
 */
const deleteApproval = async (approvalId: string) => {
  await getRequestsCollection().deleteOne({ _id: approvalId });
};
