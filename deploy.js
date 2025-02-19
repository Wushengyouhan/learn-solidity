const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "paddle enemy comic skill school grow champion quick tragic erosion glass funny",
  "https://sepolia.infura.io/v3/956846577f6f4122ba4999b023f67cae"
);

const web3 = new Web3(provider);
