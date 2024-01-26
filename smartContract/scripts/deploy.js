const hre = require("hardhat");

async function main() {
  const Transactions = await hre.ethers.getContractFactory("Transact");
  const transactions = await Transactions.deploy();

  const wait = await transactions.waitForDeployment();
  

  console.log(`"Transactions address: ${wait.target}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
