import {web3Accounts, web3Enable} from '@polkadot/extension-dapp';

async function getAddress() {
    const extensions = await web3Enable('my nft dapp');
    let allAccounts;
    if (extensions.length === 0) {
        console.log("NO PLUGIN INSTALLED");
    } else {
        allAccounts = await web3Accounts();
        if (allAccounts.length === 0) {
            console.log("NO ACCOUNT IN PLUGIN INSTALLED");
        } 
        console.log(allAccounts[0]);
    }
    return;
}

export default getAddress
