require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: process.env.ALCHEMY_API_HTTP,
      accounts: [process.env.METAMASK_P_KEY],
    },
  },
};

// module.exports = {
//   defaultNetwork: "sepolia",
//   networks: {
//     hardhat: {
//     },
//     sepolia: {
//       url: "https://eth-sepolia.g.alchemy.com/v2/<key>",
//       accounts: [privateKey1, privateKey2, ...]
//     }
//   },
//   solidity: {
//     version: "0.8.23",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   },
//   paths: {
//     sources: "./contracts",
//     tests: "./test",
//     cache: "./cache",
//     artifacts: "./artifacts"
//   },
//   mocha: {
//     timeout: 40000
//   }
// }
