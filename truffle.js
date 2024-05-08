// Allows us to use ES6 in our migrations and tests.
require('babel-register')

var WalletProvider = require("truffle-wallet-provider");

// Read and unlock keystore
// var keystore = require('fs').readFileSync("./wallet_passphrase").toString();
var pass = "17ff01c6647ccae74ca8cebe5eb2af1d174689a3a11dbc06413add5db7deb9e6"
// var wallet = require('ethereumjs-wallet').fromV3(keystore, pass);
var wallet = require('ethereumjs-wallet').fromPrivateKey(Buffer.from(pass, 'hex'));
module.exports = {
  networks: {
    // development: {
    //   host: 'localhost',
    //   port: 7545,
    //   network_id: '*' // Match any network id
    // },
    // gyaan: {
    //   provider: () => { return new WalletProvider(wallet, "http://gyaan.network:8545") },
    //   gas: "4600000",
    //   network_id: "17"
    // },
    sepolia: {
      provider: () => { return new WalletProvider(wallet, "https://sepolia.infura.io/v3/7ad41998cb2c4131abdd6e795a8273f4") },
      network_id: 11155111,
      gas: "4600000"
    }
  },
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
};
