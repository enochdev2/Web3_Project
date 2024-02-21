const { expect } = require("chai");
// const { ethers } = require("hardhat");
// const { ethers  } = require("ethers");

describe("Transact", function () {
  let transact;
  let owner;
  let seller;
  let addr2;
  let addrs;

  beforeEach(async () => {
    // Setup accounts
    [owner, seller, addr2, addrs] = await ethers.getSigners();

    const Transactions = await hre.ethers.getContractFactory("Transact");
    transact = await Transactions.deploy();
  });

  describe("ADDtoBlockchain", () => {
    beforeEach(async () => {
      const transaction = await transact.addToBlockchain(
        seller,
        1000,
        "this",
        "this"
      );
      transaction.wait();
      console.log("🚀 ~ beforeEach ~ transaction:", transaction);

      // const wait = await transactions.waitForDeployment();
    });

    it("it should check for transactions", async function () {
      const transactio = await transact.getAllTransactions();
      console.log("🚀 ~ transaction:", transactio);
      expect(transactio).to.have.lengthOf(1);
    });
    it("it should check for transactions counts", async function () {
      const transactio = await transact.getTransactionCount();
      console.log("🚀 ~ transactio:", transactio)
      expect(transactio).to.equal(1);
    });
  });
});
