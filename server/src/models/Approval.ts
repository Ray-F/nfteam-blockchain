class Approval {

  public id: string;
  public timestamp: timestamp;
  public ipfsUrl: url;
  public ownerAddress: address;

  /**
   * List of addresses that have verified this NFT.
   */
  public verifiedBy: address[];

  constructor(tokenId: string, timestamp: timestamp, ipfsUrl: url, ownerAddress: address, verifiedBy: address[]) {
    this.id = tokenId;
    this.timestamp = timestamp;
    this.ipfsUrl = ipfsUrl;
    this.ownerAddress = ownerAddress;
    this.verifiedBy = verifiedBy;
  }

}

export default Approval;
