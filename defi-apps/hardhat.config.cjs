require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const SEPOLIA_API_URL = import.meta.env.API_URL;
const SEPOLIA_PRIVATE_KEY = import.meta.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  paths: {
    sources: "./src/backend/contracts",
    artifacts: "./src/backend/artifacts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test",
  },
  networks: {
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
};
