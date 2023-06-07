import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const INFURA_KEY = process.env.INFURA_API_KEY;
const ACCOUNT = process.env.PRIVATE_KEY ?? "";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "^0.8.0"
      },
      {
        version: "^0.8.4"
      },
      {
        version: "0.8.9"
      },
      {
        version: "0.8.4"
      }
    ]
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_API_KEY}`,
      accounts: [ACCOUNT]
    }
  }
};

export default config;
