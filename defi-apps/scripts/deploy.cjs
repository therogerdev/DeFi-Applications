// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const { ethers } = require("hardhat");

async function main() {
  const signers = await ethers.getSigners(); // Get all available signers

  if (!signers.length) {
    throw new Error("No signers found! Make sure Hardhat is running.");
  }

  const deployer = signers[0]; // Assign first signer
  console.log("Deployer Address: ", deployer.address);

  const tokenContractFactory = await ethers.getContractFactory(
    "RaphBigDick"
  );
  const token = await tokenContractFactory.deploy();
  console.log("Raph Big Dick Contract Address: ", token.runner.address);

  const balance = await deployer.provider.getBalance(deployer.address); // ✅ Use provider.getBalance
  console.log("Deployer ETH balance: ", balance.toString());
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
