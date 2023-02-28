require("@nomicfoundation/hardhat-toolbox");

const TESTNET_API_KEY = "<PRIVATE_KEY>";

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.16",
  networks: {
    a1_testnet: {
      url: `https://rpc-devnet-algorand-rollup.a1.milkomeda.com`,
      accounts: [TESTNET_API_KEY]
    },
    c1_testnet: {
      url: `https://rpc-devnet-cardano-evm.c1.milkomeda.com`,
      accounts: [TESTNET_API_KEY]
    }
  }  
};
