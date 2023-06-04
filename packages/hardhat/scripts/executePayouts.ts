import { ethers } from "hardhat";

async function main() {
  const cAddress = "0x6c8D53600C7f8F97ed32e6162867F3340dE3Ab37";
  const cChallenge = await ethers.getContractAt("ChallengeImplementation", cAddress);
  await cChallenge.executePayouts();
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
