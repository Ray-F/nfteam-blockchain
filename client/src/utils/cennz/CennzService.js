import { Api } from '@cennznet/api';

const NIKAU_WS = 'wss://nikau.centrality.me/public/ws';

/**
 * Creates an API client to access CennzNet services.
 */
async function createClient() {
  // Create the API and wait until ready
  const api = await Api.create({ provider: NIKAU_WS });

  console.log('[SERVER] CennzNet connected');

  return api;
}

/**
 * Get details of a client.
 */
async function getClientDetails(client) {
  // Retrieve the chain & node information information via rpc calls
  const values = await Promise.all([client.rpc.system.chain(),
                                     client.rpc.system.name(),
                                     client.rpc.system.version()]);

  return {
    chain: values[0],
    name: values[1],
    version: values[2],
  };
}

export default {
  createClient,
  getClientDetails,
};
