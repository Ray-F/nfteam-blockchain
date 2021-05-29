import { ObjectId } from "mongodb";

/**
 * An object that is stored in our DB when a verification request is made.
 */
class VerificationRequest {
  public id: string;
  public timestamp: timestamp;
  public ipfsUrl: url;
  public fromAddress: address;
  public toAddresses: address[];
  public isApproved: boolean;

  constructor(id: string = null, timestamp: number = null, ipfsUrl: url, fromAddress: string, toAddresses: string[], isApproved: boolean) {
    this.id = id || new ObjectId().toString();
    this.timestamp = timestamp || new Date().valueOf();
    this.ipfsUrl = ipfsUrl;
    this.fromAddress = fromAddress;
    this.toAddresses = toAddresses;
    this.isApproved = isApproved;
  }
}

export default VerificationRequest;
