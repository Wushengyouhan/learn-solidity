const assert = require("assert");
const ganache = require("ganache");
const { Web3 } = require("web3");
const web3 = new Web3(ganache.provider());

// contract test code will go here
let accounts;

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    console.log(accounts);
  });
});
