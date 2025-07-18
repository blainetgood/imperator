const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("CreativeAgreementRegistry", function () {
  it("should create a new agreement", async function () {
    const Contract = await ethers.getContractFactory("CreativeAgreementRegistry");
    const agreement = await Contract.deploy();
    await agreement.deployed();

    await agreement.createAgreement(
      "Song of Skyborne Queens",
      "3 songs in Imperatani",
      "2025-08-01 to 2025-09-01",
      ["mythic", "music"],
      ["ritual"]
    );

    const record = await agreement.agreements(0);
    expect(record.projectTitle).to.equal("Song of Skyborne Queens");
  });
});
