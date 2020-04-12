const HDWallet = require('truffle-hdwallet-provider');
const infuraKey = "a76f7e320b904a108532bf820fc48d7b";
//
// const fs = require('fs');
const mnemonic = 'dust brain earn alien nut misery jacket first describe miracle skirt stand';

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 9545,
      network_id: "*" // Match any network id
    },

    rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    },
  }
};